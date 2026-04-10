import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.HIPP0_SERVER_URL || "http://localhost:3100";

async function proxy(req: NextRequest, context: { params: { path?: string[] } }) {
  const path = (context.params.path ?? []).join("/");
  const url = new URL(req.url);
  const target = `${BACKEND_URL}/api/playground/${path}${url.search}`;

  const method = req.method;
  const headers = new Headers();
  req.headers.forEach((value, key) => {
    const lower = key.toLowerCase();
    if (
      lower === "host" ||
      lower === "connection" ||
      lower === "content-length" ||
      lower.startsWith("x-forwarded")
    ) {
      return;
    }
    headers.set(key, value);
  });

  const init: RequestInit = { method, headers };
  if (method !== "GET" && method !== "HEAD") {
    try {
      const body = await req.text();
      if (body) init.body = body;
    } catch {
      // no body
    }
  }

  try {
    const upstream = await fetch(target, init);
    const contentType = upstream.headers.get("content-type") || "application/json";
    const text = await upstream.text();
    return new NextResponse(text, {
      status: upstream.status,
      headers: { "content-type": contentType },
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: "playground_upstream_unreachable",
        message: (err as Error).message,
        decisions: [],
      },
      { status: 502 },
    );
  }
}

export async function GET(req: NextRequest, context: { params: { path?: string[] } }) {
  return proxy(req, context);
}

export async function POST(req: NextRequest, context: { params: { path?: string[] } }) {
  return proxy(req, context);
}

export async function PUT(req: NextRequest, context: { params: { path?: string[] } }) {
  return proxy(req, context);
}

export async function PATCH(req: NextRequest, context: { params: { path?: string[] } }) {
  return proxy(req, context);
}

export async function DELETE(req: NextRequest, context: { params: { path?: string[] } }) {
  return proxy(req, context);
}

export async function OPTIONS(req: NextRequest, context: { params: { path?: string[] } }) {
  return proxy(req, context);
}
