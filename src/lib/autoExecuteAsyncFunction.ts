export function autoExecuteAsyncFunction(callback: () => Promise<void>) {
    callback();
}