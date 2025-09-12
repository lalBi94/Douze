export const ws = { current: null };

export const initWS = () => {
    if (ws.current) return ws.current;
    ws.current = new WebSocket("ws://localhost:9001");

    ws.current.onopen = () => {
        console.log("Douze communique avec Les Sims 4");
    };

    ws.current.onerror = (err) => {
        console.error("ws error:", err);
    };

    return ws.current;
};