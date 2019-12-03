/**
 * @param statusString {string}
 * @param outside {boolean}
 * @return string
 */
export function selectFontColor(statusString, outside = false) {

    switch (statusString) {
        case `success`:
        case `warning`:
        case `danger`:
        case `info`:
        case `primary`:
        case `secondary`:
        case `tertiary`:
            if (outside) {
                statusString = `text-gray-700`;
            } else {
                statusString = `text-gray-900`;
            }
            break;

        case `dark`:
            if (outside) {
                statusString = `text-black`;
            } else {
                statusString = `text-white`;
            }
            break;

        case `light`:
            if (outside) {
                statusString = `text-white`;
            } else {
                statusString = `text-black`;
            }
            break;
    }

    return statusString;
}
