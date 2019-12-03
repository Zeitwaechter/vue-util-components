/**
 * @param statusString {string}
 * @param outside {boolean}
 * @return string
 */
export function selectFontColor(statusString, outside = false) {

    switch (statusString) {
        case `success`:
            if (outside) {
                statusString = `text-gray-800`;
            } else {
                statusString = `text-green-300`;
            }
            break;

        case `warning`:
            if (outside) {
                statusString = `text-gray-800`;
            } else {
                statusString = `text-yellow-400`;
            }
            break;

        case `danger`:
            if (outside) {
                statusString = `text-gray-800`;
            } else {
                statusString = `text-red-300`;
            }
            break;

        case `info`:
            if (outside) {
                statusString = `text-gray-800`;
            } else {
                statusString = `text-blue-200`;
            }
            break;

        case `primary`:
            if (outside) {
                statusString = `text-gray-800`;
            } else {
                statusString = `text-blue-400`;
            }
            break;

        case `secondary`:
            if (outside) {
                statusString = `text-gray-800`;
            } else {
                statusString = `text-gray-300`;
            }
            break;

        case `tertiary`:
            if (outside) {
                statusString = `text-gray-800`;
            } else {
                statusString = `text-gray-200`;
            }
            break;

        case `dark`:
            if (outside) {
                statusString = `text-gray-800`;
            } else {
                statusString = `text-black`;
            }
            break;

        case `light`:
            if (outside) {
                statusString = `text-gray-800`;
            } else {
                statusString = `text-white`;
            }
            break;
    }

    return statusString;
}
