// functions/api/events.js
export const onRequestPost = async (ctx) => {
    const req = ctx.request;
    const url = new URL(req.url);

    const upstream = await fetch('https://datafa.st/api/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // forward a couple of harmless headers for attribution
            'User-Agent': req.headers.get('User-Agent') ?? '',
            Origin: req.headers.get('Origin') ?? url.origin,
        },
        body: await req.text(),
    });

    // passthrough status/body; normalize content-type
    return new Response(await upstream.text(), {
        status: upstream.status,
        headers: { 'Content-Type': 'application/json' },
    });
};
