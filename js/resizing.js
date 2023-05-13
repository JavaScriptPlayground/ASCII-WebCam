export function resizing(callbackfn) {
    // initial load
    callbackfn(window.innerWidth, window.innerHeight)
    window.addEventListener('resize', (event) => {
        return callbackfn(
            event.target.innerWidth,
            event.target.innerHeight
        )
    });
}
