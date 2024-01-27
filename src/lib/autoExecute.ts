export function autoExecute(callback: () => Promise<void>) {
    callback();
}