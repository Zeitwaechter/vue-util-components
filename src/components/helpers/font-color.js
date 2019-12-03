/**
 * @param statusString {string}
 * @param outside {boolean}
 * @return string
 */
export function selectFontColor(statusString, outside = false) {

    switch (statusString) {
        case `success`:
            if (outside) {
                statusString = `text-green-300`;
            } else {
                statusString = `text-gray-800`;
            }
            break;

        case `warning`:
            if (outside) {
                statusString = `text-yellow-400`;
            } else {
                statusString = `text-gray-800`;
            }
            break;

        case `danger`:
            if (outside) {
                statusString = `text-red-300`;
            } else {
                statusString = `text-gray-800`;
            }
            break;

        case `info`:
            if (outside) {
                statusString = `text-blue-200`;
            } else {
                statusString = `text-gray-800`;
            }
            break;

        case `primary`:
            if (outside) {
                statusString = `text-blue-400`;
            } else {
                statusString = `text-gray-800`;
            }
            break;

        case `secondary`:
            if (outside) {
                statusString = `text-gray-300`;
            } else {
                statusString = `text-gray-800`;
            }
            break;

        case `tertiary`:
            if (outside) {
                statusString = `text-gray-200`;
            } else {
                statusString = `text-gray-800`;
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
