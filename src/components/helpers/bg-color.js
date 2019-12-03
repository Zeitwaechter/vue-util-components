/**
 * @param statusString {string}
 * @param outside {boolean}
 * @return string
 */
export function selectBackgroundColor(statusString, outside = false) {

    switch (statusString) {
        case `success`:
            if (outside) {
                statusString = `border border-green-300`;
            } else {
                statusString = `border-green-400 bg-green-300`;
            }
            break;

        case `warning`:
            if (outside) {
                statusString = `border border-yellow-400`;
            } else {
                statusString = `border-yellow-500 bg-yellow-400`;
            }
            break;

        case `danger`:
            if (outside) {
                statusString = `border border-red-300`;
            } else {
                statusString = `border-red-400 bg-red-300`;
            }
            break;

        case `info`:
            if (outside) {
                statusString = `border border-blue-200`;
            } else {
                statusString = `border-blue-300 bg-blue-200`;
            }
            break;

        case `primary`:
            if (outside) {
                statusString = `border border-blue-400`;
            } else {
                statusString = `border-blue-500 bg-blue-400`;
            }
            break;

        case `secondary`:
            if (outside) {
                statusString = `border border-gray-300`;
            } else {
                statusString = `border-gray-400 bg-gray-300`;
            }
            break;

        case `tertiary`:
            if (outside) {
                statusString = `border border-gray-200`;
            } else {
                statusString = `border-gray-300 bg-gray-200`;
            }
            break;

        case `dark`:
            if (outside) {
                statusString = `border border-black`;
            } else {
                statusString = `border-gray-300 bg-black`;
            }
            break;

        case `light`:
            if (outside) {
                statusString = `border border-white`;
            } else {
                statusString = `border-gray-300 bg-white`;
            }
            break;
    }

    return statusString;
}
