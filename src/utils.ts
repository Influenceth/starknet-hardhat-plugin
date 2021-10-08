
import * as os from "os";

/**
 * Replaces Starknet specific terminology with the terminology used in this plugin.
 * 
 * @param msg the log message to be adapted
 * @returns the log message with adaptation replacements
 */
export function adaptLog(msg: string): string {
    return msg
        .replace("--network", "--starknet-network")
        .replace("--gateway_url", "--gateway-url");
}

/**
 * Finds an IP address used by the host machine.
 * 
 * Credit: https://stackoverflow.com/a/10756441
 * @returns the first found IP address
 * @throws Error if none found
 */
export function getHostIpAddress() {
    const interfaces = os.networkInterfaces();
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === "IPv4" && !address.internal) {
                return address.address;
            }
        }
    }

    throw new Error("This host has no available IP addresses");
}
