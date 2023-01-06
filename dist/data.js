"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    "svg": {
        "samsung 4": true,
        "safari 3.2": true,
        "safari 5": true,
        "safari 5.1": true,
        "safari 6": true,
        "safari 6.1": true,
        "safari 7": true,
        "safari 7.1": true,
        "safari 8": true,
        "safari 9": true,
        "safari 9.1": true,
        "safari 10": true,
        "safari 10.1": true,
        "safari 11": true,
        "safari 11.1": true,
        "safari 12": true,
        "safari 12.1": true,
        "safari 13": true,
        "safari 13.1": true,
        "safari 14": true,
        "safari 14.1": true,
        "safari 15": true,
        "safari 15.1": true,
        "safari 15.2-15.3": true,
        "safari 15.4": true,
        "safari 15.5": true,
        "safari 15.6": true,
        "safari 16.0": true,
        "safari 16.1": true,
        "safari 16.2": true,
        "opera 9": true,
        "opera 9.5-9.6": true,
        "opera 10.5": true,
        "opera 10.6": true,
        "opera 11": true,
        "opera 11.1": true,
        "opera 11.5": true,
        "opera 11.6": true,
        "opera 12": true,
        "opera 12.1": true,
        "opera 15": true,
        "opera 16": true,
        "opera 17": true,
        "opera 18": true,
        "opera 19": true,
        "opera 20": true,
        "opera 21": true,
        "opera 22": true,
        "opera 23": true,
        "opera 24": true,
        "ios_saf 4.2-4.3": true,
        "ios_saf 5.0-5.1": true,
        "ios_saf 6.0-6.1": true,
        "ios_saf 7.0-7.1": true,
        "ios_saf 8.1-8.4": true,
        "ios_saf 9.0-9.2": true,
        "ios_saf 9.3": true,
        "ios_saf 10.0-10.2": true,
        "ios_saf 10.3": true,
        "ios_saf 11.0-11.2": true,
        "ios_saf 11.3-11.4": true,
        "ios_saf 12.0-12.1": true,
        "ios_saf 12.2-12.5": true,
        "ios_saf 13.0-13.1": true,
        "ios_saf 13.2": true,
        "ios_saf 13.3": true,
        "ios_saf 13.4-13.7": true,
        "ios_saf 14.0-14.4": true,
        "ios_saf 14.5-14.8": true,
        "ios_saf 15.0-15.1": true,
        "ios_saf 15.2-15.3": true,
        "ios_saf 15.4": true,
        "ios_saf 15.5": true,
        "ios_saf 15.6": true,
        "ios_saf 16.0": true,
        "ios_saf 16.1": true,
        "chrome 4": true,
        "chrome 5": true,
        "chrome 6": true,
        "chrome 7": true,
        "chrome 8": true,
        "chrome 9": true,
        "chrome 10": true,
        "chrome 11": true,
        "chrome 12": true,
        "chrome 13": true,
        "chrome 14": true,
        "chrome 15": true,
        "chrome 16": true,
        "chrome 17": true,
        "chrome 18": true,
        "chrome 19": true,
        "chrome 20": true,
        "chrome 21": true,
        "chrome 22": true,
        "chrome 23": true,
        "chrome 24": true,
        "chrome 25": true,
        "chrome 26": true,
        "chrome 27": true,
        "chrome 28": true,
        "chrome 29": true,
        "chrome 30": true,
        "chrome 31": true,
        "chrome 32": true,
        "chrome 33": true,
        "chrome 34": true,
        "chrome 35": true,
        "chrome 36": true,
        "chrome 37": true,
        "android 4": true,
        "android 4.1": true,
        "android 4.2-4.3": true,
        "android 4.4.3-4.4.4": true,
    },
    "ttf": {
        "samsung 4": true,
        "samsung 5.0-5.4": true,
        "samsung 6.2-6.4": true,
        "samsung 7.2-7.4": true,
        "samsung 8.2": true,
        "samsung 9.2": true,
        "samsung 10.1": true,
        "samsung 11.1-11.2": true,
        "samsung 12.0": true,
        "samsung 13.0": true,
        "samsung 14.0": true,
        "samsung 15.0": true,
        "samsung 16.0": true,
        "samsung 17.0": true,
        "samsung 18.0": true,
        "samsung 19.0": true,
        "safari 3.2": true,
        "safari 5": true,
        "safari 5.1": true,
        "safari 6": true,
        "safari 6.1": true,
        "safari 7": true,
        "safari 7.1": true,
        "safari 8": true,
        "safari 9": true,
        "safari 9.1": true,
        "safari 10": true,
        "safari 10.1": true,
        "safari 11": true,
        "safari 11.1": true,
        "safari 12": true,
        "safari 12.1": true,
        "safari 13": true,
        "safari 13.1": true,
        "safari 14": true,
        "safari 14.1": true,
        "safari 15": true,
        "safari 15.1": true,
        "safari 15.2-15.3": true,
        "safari 15.4": true,
        "safari 15.5": true,
        "safari 15.6": true,
        "safari 16.0": true,
        "safari 16.1": true,
        "safari 16.2": true,
        "opera 10.5": true,
        "opera 10.6": true,
        "opera 11": true,
        "opera 11.1": true,
        "opera 11.5": true,
        "opera 11.6": true,
        "opera 12": true,
        "opera 12.1": true,
        "opera 15": true,
        "opera 16": true,
        "opera 17": true,
        "opera 18": true,
        "opera 19": true,
        "opera 20": true,
        "opera 21": true,
        "opera 22": true,
        "opera 23": true,
        "opera 24": true,
        "opera 25": true,
        "opera 26": true,
        "opera 27": true,
        "opera 28": true,
        "opera 29": true,
        "opera 30": true,
        "opera 31": true,
        "opera 32": true,
        "opera 33": true,
        "opera 34": true,
        "opera 35": true,
        "opera 36": true,
        "opera 37": true,
        "opera 38": true,
        "opera 39": true,
        "opera 40": true,
        "opera 41": true,
        "opera 42": true,
        "opera 43": true,
        "opera 44": true,
        "opera 45": true,
        "opera 46": true,
        "opera 47": true,
        "opera 48": true,
        "opera 49": true,
        "opera 50": true,
        "opera 51": true,
        "opera 52": true,
        "opera 53": true,
        "opera 54": true,
        "opera 55": true,
        "opera 56": true,
        "opera 57": true,
        "opera 58": true,
        "opera 60": true,
        "opera 62": true,
        "opera 63": true,
        "opera 64": true,
        "opera 65": true,
        "opera 66": true,
        "opera 67": true,
        "opera 68": true,
        "opera 69": true,
        "opera 70": true,
        "opera 71": true,
        "opera 72": true,
        "opera 73": true,
        "opera 74": true,
        "opera 75": true,
        "opera 76": true,
        "opera 77": true,
        "opera 78": true,
        "opera 79": true,
        "opera 80": true,
        "opera 81": true,
        "opera 82": true,
        "opera 83": true,
        "opera 84": true,
        "opera 85": true,
        "opera 86": true,
        "opera 87": true,
        "opera 88": true,
        "opera 89": true,
        "opera 90": true,
        "opera 91": true,
        "opera 92": true,
        "op_mob 72": true,
        "kaios 2.5": true,
        "ios_saf 4.2-4.3": true,
        "ios_saf 5.0-5.1": true,
        "ios_saf 6.0-6.1": true,
        "ios_saf 7.0-7.1": true,
        "ios_saf 8.1-8.4": true,
        "ios_saf 9.0-9.2": true,
        "ios_saf 9.3": true,
        "ios_saf 10.0-10.2": true,
        "ios_saf 10.3": true,
        "ios_saf 11.0-11.2": true,
        "ios_saf 11.3-11.4": true,
        "ios_saf 12.0-12.1": true,
        "ios_saf 12.2-12.5": true,
        "ios_saf 13.0-13.1": true,
        "ios_saf 13.2": true,
        "ios_saf 13.3": true,
        "ios_saf 13.4-13.7": true,
        "ios_saf 14.0-14.4": true,
        "ios_saf 14.5-14.8": true,
        "ios_saf 15.0-15.1": true,
        "ios_saf 15.2-15.3": true,
        "ios_saf 15.4": true,
        "ios_saf 15.5": true,
        "ios_saf 15.6": true,
        "ios_saf 16.0": true,
        "ios_saf 16.1": true,
        "firefox 3.5": true,
        "firefox 3.6": true,
        "firefox 4": true,
        "firefox 5": true,
        "firefox 6": true,
        "firefox 7": true,
        "firefox 8": true,
        "firefox 9": true,
        "firefox 10": true,
        "firefox 11": true,
        "firefox 12": true,
        "firefox 13": true,
        "firefox 14": true,
        "firefox 15": true,
        "firefox 16": true,
        "firefox 17": true,
        "firefox 18": true,
        "firefox 19": true,
        "firefox 20": true,
        "firefox 21": true,
        "firefox 22": true,
        "firefox 23": true,
        "firefox 24": true,
        "firefox 25": true,
        "firefox 26": true,
        "firefox 27": true,
        "firefox 28": true,
        "firefox 29": true,
        "firefox 30": true,
        "firefox 31": true,
        "firefox 32": true,
        "firefox 33": true,
        "firefox 34": true,
        "firefox 35": true,
        "firefox 36": true,
        "firefox 37": true,
        "firefox 38": true,
        "firefox 39": true,
        "firefox 40": true,
        "firefox 41": true,
        "firefox 42": true,
        "firefox 43": true,
        "firefox 44": true,
        "firefox 45": true,
        "firefox 46": true,
        "firefox 47": true,
        "firefox 48": true,
        "firefox 49": true,
        "firefox 50": true,
        "firefox 51": true,
        "firefox 52": true,
        "firefox 53": true,
        "firefox 54": true,
        "firefox 55": true,
        "firefox 56": true,
        "firefox 57": true,
        "firefox 58": true,
        "firefox 59": true,
        "firefox 60": true,
        "firefox 61": true,
        "firefox 62": true,
        "firefox 63": true,
        "firefox 64": true,
        "firefox 65": true,
        "firefox 66": true,
        "firefox 67": true,
        "firefox 68": true,
        "firefox 69": true,
        "firefox 70": true,
        "firefox 71": true,
        "firefox 72": true,
        "firefox 73": true,
        "firefox 74": true,
        "firefox 75": true,
        "firefox 76": true,
        "firefox 77": true,
        "firefox 78": true,
        "firefox 79": true,
        "firefox 80": true,
        "firefox 81": true,
        "firefox 82": true,
        "firefox 83": true,
        "firefox 84": true,
        "firefox 85": true,
        "firefox 86": true,
        "firefox 87": true,
        "firefox 88": true,
        "firefox 89": true,
        "firefox 90": true,
        "firefox 91": true,
        "firefox 92": true,
        "firefox 93": true,
        "firefox 94": true,
        "firefox 95": true,
        "firefox 96": true,
        "firefox 97": true,
        "firefox 98": true,
        "firefox 99": true,
        "firefox 100": true,
        "firefox 101": true,
        "firefox 102": true,
        "firefox 103": true,
        "firefox 104": true,
        "firefox 105": true,
        "firefox 106": true,
        "firefox 107": true,
        "firefox 108": true,
        "edge 12": true,
        "edge 13": true,
        "edge 14": true,
        "edge 15": true,
        "edge 16": true,
        "edge 17": true,
        "edge 18": true,
        "edge 80": true,
        "edge 81": true,
        "edge 83": true,
        "edge 84": true,
        "edge 85": true,
        "edge 86": true,
        "edge 87": true,
        "edge 88": true,
        "edge 89": true,
        "edge 90": true,
        "edge 91": true,
        "edge 92": true,
        "edge 93": true,
        "edge 94": true,
        "edge 95": true,
        "edge 96": true,
        "edge 97": true,
        "edge 98": true,
        "edge 99": true,
        "edge 100": true,
        "edge 101": true,
        "edge 102": true,
        "edge 103": true,
        "edge 104": true,
        "edge 105": true,
        "edge 106": true,
        "edge 107": true,
        "chrome 4": true,
        "chrome 5": true,
        "chrome 6": true,
        "chrome 7": true,
        "chrome 8": true,
        "chrome 9": true,
        "chrome 10": true,
        "chrome 11": true,
        "chrome 12": true,
        "chrome 13": true,
        "chrome 14": true,
        "chrome 15": true,
        "chrome 16": true,
        "chrome 17": true,
        "chrome 18": true,
        "chrome 19": true,
        "chrome 20": true,
        "chrome 21": true,
        "chrome 22": true,
        "chrome 23": true,
        "chrome 24": true,
        "chrome 25": true,
        "chrome 26": true,
        "chrome 27": true,
        "chrome 28": true,
        "chrome 29": true,
        "chrome 30": true,
        "chrome 31": true,
        "chrome 32": true,
        "chrome 33": true,
        "chrome 34": true,
        "chrome 35": true,
        "chrome 36": true,
        "chrome 37": true,
        "chrome 38": true,
        "chrome 39": true,
        "chrome 40": true,
        "chrome 41": true,
        "chrome 42": true,
        "chrome 43": true,
        "chrome 44": true,
        "chrome 45": true,
        "chrome 46": true,
        "chrome 47": true,
        "chrome 48": true,
        "chrome 49": true,
        "chrome 50": true,
        "chrome 51": true,
        "chrome 52": true,
        "chrome 53": true,
        "chrome 54": true,
        "chrome 55": true,
        "chrome 56": true,
        "chrome 57": true,
        "chrome 58": true,
        "chrome 59": true,
        "chrome 60": true,
        "chrome 61": true,
        "chrome 62": true,
        "chrome 63": true,
        "chrome 64": true,
        "chrome 65": true,
        "chrome 66": true,
        "chrome 67": true,
        "chrome 68": true,
        "chrome 69": true,
        "chrome 70": true,
        "chrome 71": true,
        "chrome 72": true,
        "chrome 73": true,
        "chrome 74": true,
        "chrome 75": true,
        "chrome 76": true,
        "chrome 77": true,
        "chrome 78": true,
        "chrome 79": true,
        "chrome 80": true,
        "chrome 81": true,
        "chrome 83": true,
        "chrome 84": true,
        "chrome 85": true,
        "chrome 86": true,
        "chrome 87": true,
        "chrome 88": true,
        "chrome 89": true,
        "chrome 90": true,
        "chrome 91": true,
        "chrome 92": true,
        "chrome 93": true,
        "chrome 94": true,
        "chrome 95": true,
        "chrome 96": true,
        "chrome 97": true,
        "chrome 98": true,
        "chrome 99": true,
        "chrome 100": true,
        "chrome 101": true,
        "chrome 102": true,
        "chrome 103": true,
        "chrome 104": true,
        "chrome 105": true,
        "chrome 106": true,
        "chrome 107": true,
        "chrome 108": true,
        "chrome 109": true,
        "chrome 110": true,
        "android 4": true,
        "android 4.1": true,
        "android 4.2-4.3": true,
        "android 4.4.3-4.4.4": true,
        "and_uc 13.4": true,
        "and_qq 13.1": true,
        "and_ff 107": true,
        "and_chr 108": true,
    },
    "eot": {
        "ie 6": true,
        "ie 7": true,
        "ie 8": true,
        "ie 9": true,
        "ie 10": true,
        "ie 11": true,
    },
    "woff": {
        "samsung 4": true,
        "samsung 5.0-5.4": true,
        "samsung 6.2-6.4": true,
        "samsung 7.2-7.4": true,
        "samsung 8.2": true,
        "samsung 9.2": true,
        "samsung 10.1": true,
        "samsung 11.1-11.2": true,
        "samsung 12.0": true,
        "samsung 13.0": true,
        "samsung 14.0": true,
        "samsung 15.0": true,
        "samsung 16.0": true,
        "samsung 17.0": true,
        "samsung 18.0": true,
        "samsung 19.0": true,
        "safari 5.1": true,
        "safari 6": true,
        "safari 6.1": true,
        "safari 7": true,
        "safari 7.1": true,
        "safari 8": true,
        "safari 9": true,
        "safari 9.1": true,
        "safari 10": true,
        "safari 10.1": true,
        "safari 11": true,
        "safari 11.1": true,
        "safari 12": true,
        "safari 12.1": true,
        "safari 13": true,
        "safari 13.1": true,
        "safari 14": true,
        "safari 14.1": true,
        "safari 15": true,
        "safari 15.1": true,
        "safari 15.2-15.3": true,
        "safari 15.4": true,
        "safari 15.5": true,
        "safari 15.6": true,
        "safari 16.0": true,
        "safari 16.1": true,
        "safari 16.2": true,
        "opera 11.1": true,
        "opera 11.5": true,
        "opera 11.6": true,
        "opera 12": true,
        "opera 12.1": true,
        "opera 15": true,
        "opera 16": true,
        "opera 17": true,
        "opera 18": true,
        "opera 19": true,
        "opera 20": true,
        "opera 21": true,
        "opera 22": true,
        "opera 23": true,
        "opera 24": true,
        "opera 25": true,
        "opera 26": true,
        "opera 27": true,
        "opera 28": true,
        "opera 29": true,
        "opera 30": true,
        "opera 31": true,
        "opera 32": true,
        "opera 33": true,
        "opera 34": true,
        "opera 35": true,
        "opera 36": true,
        "opera 37": true,
        "opera 38": true,
        "opera 39": true,
        "opera 40": true,
        "opera 41": true,
        "opera 42": true,
        "opera 43": true,
        "opera 44": true,
        "opera 45": true,
        "opera 46": true,
        "opera 47": true,
        "opera 48": true,
        "opera 49": true,
        "opera 50": true,
        "opera 51": true,
        "opera 52": true,
        "opera 53": true,
        "opera 54": true,
        "opera 55": true,
        "opera 56": true,
        "opera 57": true,
        "opera 58": true,
        "opera 60": true,
        "opera 62": true,
        "opera 63": true,
        "opera 64": true,
        "opera 65": true,
        "opera 66": true,
        "opera 67": true,
        "opera 68": true,
        "opera 69": true,
        "opera 70": true,
        "opera 71": true,
        "opera 72": true,
        "opera 73": true,
        "opera 74": true,
        "opera 75": true,
        "opera 76": true,
        "opera 77": true,
        "opera 78": true,
        "opera 79": true,
        "opera 80": true,
        "opera 81": true,
        "opera 82": true,
        "opera 83": true,
        "opera 84": true,
        "opera 85": true,
        "opera 86": true,
        "opera 87": true,
        "opera 88": true,
        "opera 89": true,
        "opera 90": true,
        "opera 91": true,
        "opera 92": true,
        "op_mob 72": true,
        "kaios 2.5": true,
        "ios_saf 5.0-5.1": true,
        "ios_saf 6.0-6.1": true,
        "ios_saf 7.0-7.1": true,
        "ios_saf 8.1-8.4": true,
        "ios_saf 9.0-9.2": true,
        "ios_saf 9.3": true,
        "ios_saf 10.0-10.2": true,
        "ios_saf 10.3": true,
        "ios_saf 11.0-11.2": true,
        "ios_saf 11.3-11.4": true,
        "ios_saf 12.0-12.1": true,
        "ios_saf 12.2-12.5": true,
        "ios_saf 13.0-13.1": true,
        "ios_saf 13.2": true,
        "ios_saf 13.3": true,
        "ios_saf 13.4-13.7": true,
        "ios_saf 14.0-14.4": true,
        "ios_saf 14.5-14.8": true,
        "ios_saf 15.0-15.1": true,
        "ios_saf 15.2-15.3": true,
        "ios_saf 15.4": true,
        "ios_saf 15.5": true,
        "ios_saf 15.6": true,
        "ios_saf 16.0": true,
        "ios_saf 16.1": true,
        "ie_mob 10": true,
        "ie_mob 11": true,
        "ie 9": true,
        "ie 10": true,
        "ie 11": true,
        "firefox 3.6": true,
        "firefox 4": true,
        "firefox 5": true,
        "firefox 6": true,
        "firefox 7": true,
        "firefox 8": true,
        "firefox 9": true,
        "firefox 10": true,
        "firefox 11": true,
        "firefox 12": true,
        "firefox 13": true,
        "firefox 14": true,
        "firefox 15": true,
        "firefox 16": true,
        "firefox 17": true,
        "firefox 18": true,
        "firefox 19": true,
        "firefox 20": true,
        "firefox 21": true,
        "firefox 22": true,
        "firefox 23": true,
        "firefox 24": true,
        "firefox 25": true,
        "firefox 26": true,
        "firefox 27": true,
        "firefox 28": true,
        "firefox 29": true,
        "firefox 30": true,
        "firefox 31": true,
        "firefox 32": true,
        "firefox 33": true,
        "firefox 34": true,
        "firefox 35": true,
        "firefox 36": true,
        "firefox 37": true,
        "firefox 38": true,
        "firefox 39": true,
        "firefox 40": true,
        "firefox 41": true,
        "firefox 42": true,
        "firefox 43": true,
        "firefox 44": true,
        "firefox 45": true,
        "firefox 46": true,
        "firefox 47": true,
        "firefox 48": true,
        "firefox 49": true,
        "firefox 50": true,
        "firefox 51": true,
        "firefox 52": true,
        "firefox 53": true,
        "firefox 54": true,
        "firefox 55": true,
        "firefox 56": true,
        "firefox 57": true,
        "firefox 58": true,
        "firefox 59": true,
        "firefox 60": true,
        "firefox 61": true,
        "firefox 62": true,
        "firefox 63": true,
        "firefox 64": true,
        "firefox 65": true,
        "firefox 66": true,
        "firefox 67": true,
        "firefox 68": true,
        "firefox 69": true,
        "firefox 70": true,
        "firefox 71": true,
        "firefox 72": true,
        "firefox 73": true,
        "firefox 74": true,
        "firefox 75": true,
        "firefox 76": true,
        "firefox 77": true,
        "firefox 78": true,
        "firefox 79": true,
        "firefox 80": true,
        "firefox 81": true,
        "firefox 82": true,
        "firefox 83": true,
        "firefox 84": true,
        "firefox 85": true,
        "firefox 86": true,
        "firefox 87": true,
        "firefox 88": true,
        "firefox 89": true,
        "firefox 90": true,
        "firefox 91": true,
        "firefox 92": true,
        "firefox 93": true,
        "firefox 94": true,
        "firefox 95": true,
        "firefox 96": true,
        "firefox 97": true,
        "firefox 98": true,
        "firefox 99": true,
        "firefox 100": true,
        "firefox 101": true,
        "firefox 102": true,
        "firefox 103": true,
        "firefox 104": true,
        "firefox 105": true,
        "firefox 106": true,
        "firefox 107": true,
        "firefox 108": true,
        "edge 12": true,
        "edge 13": true,
        "edge 14": true,
        "edge 15": true,
        "edge 16": true,
        "edge 17": true,
        "edge 18": true,
        "edge 80": true,
        "edge 81": true,
        "edge 83": true,
        "edge 84": true,
        "edge 85": true,
        "edge 86": true,
        "edge 87": true,
        "edge 88": true,
        "edge 89": true,
        "edge 90": true,
        "edge 91": true,
        "edge 92": true,
        "edge 93": true,
        "edge 94": true,
        "edge 95": true,
        "edge 96": true,
        "edge 97": true,
        "edge 98": true,
        "edge 99": true,
        "edge 100": true,
        "edge 101": true,
        "edge 102": true,
        "edge 103": true,
        "edge 104": true,
        "edge 105": true,
        "edge 106": true,
        "edge 107": true,
        "chrome 5": true,
        "chrome 6": true,
        "chrome 7": true,
        "chrome 8": true,
        "chrome 9": true,
        "chrome 10": true,
        "chrome 11": true,
        "chrome 12": true,
        "chrome 13": true,
        "chrome 14": true,
        "chrome 15": true,
        "chrome 16": true,
        "chrome 17": true,
        "chrome 18": true,
        "chrome 19": true,
        "chrome 20": true,
        "chrome 21": true,
        "chrome 22": true,
        "chrome 23": true,
        "chrome 24": true,
        "chrome 25": true,
        "chrome 26": true,
        "chrome 27": true,
        "chrome 28": true,
        "chrome 29": true,
        "chrome 30": true,
        "chrome 31": true,
        "chrome 32": true,
        "chrome 33": true,
        "chrome 34": true,
        "chrome 35": true,
        "chrome 36": true,
        "chrome 37": true,
        "chrome 38": true,
        "chrome 39": true,
        "chrome 40": true,
        "chrome 41": true,
        "chrome 42": true,
        "chrome 43": true,
        "chrome 44": true,
        "chrome 45": true,
        "chrome 46": true,
        "chrome 47": true,
        "chrome 48": true,
        "chrome 49": true,
        "chrome 50": true,
        "chrome 51": true,
        "chrome 52": true,
        "chrome 53": true,
        "chrome 54": true,
        "chrome 55": true,
        "chrome 56": true,
        "chrome 57": true,
        "chrome 58": true,
        "chrome 59": true,
        "chrome 60": true,
        "chrome 61": true,
        "chrome 62": true,
        "chrome 63": true,
        "chrome 64": true,
        "chrome 65": true,
        "chrome 66": true,
        "chrome 67": true,
        "chrome 68": true,
        "chrome 69": true,
        "chrome 70": true,
        "chrome 71": true,
        "chrome 72": true,
        "chrome 73": true,
        "chrome 74": true,
        "chrome 75": true,
        "chrome 76": true,
        "chrome 77": true,
        "chrome 78": true,
        "chrome 79": true,
        "chrome 80": true,
        "chrome 81": true,
        "chrome 83": true,
        "chrome 84": true,
        "chrome 85": true,
        "chrome 86": true,
        "chrome 87": true,
        "chrome 88": true,
        "chrome 89": true,
        "chrome 90": true,
        "chrome 91": true,
        "chrome 92": true,
        "chrome 93": true,
        "chrome 94": true,
        "chrome 95": true,
        "chrome 96": true,
        "chrome 97": true,
        "chrome 98": true,
        "chrome 99": true,
        "chrome 100": true,
        "chrome 101": true,
        "chrome 102": true,
        "chrome 103": true,
        "chrome 104": true,
        "chrome 105": true,
        "chrome 106": true,
        "chrome 107": true,
        "chrome 108": true,
        "chrome 109": true,
        "chrome 110": true,
        "android 4.4.3-4.4.4": true,
        "and_uc 13.4": true,
        "and_qq 13.1": true,
        "and_ff 107": true,
        "and_chr 108": true,
    },
    "woff2": {
        "samsung 4": true,
        "samsung 5.0-5.4": true,
        "samsung 6.2-6.4": true,
        "samsung 7.2-7.4": true,
        "samsung 8.2": true,
        "samsung 9.2": true,
        "samsung 10.1": true,
        "samsung 11.1-11.2": true,
        "samsung 12.0": true,
        "samsung 13.0": true,
        "samsung 14.0": true,
        "samsung 15.0": true,
        "samsung 16.0": true,
        "samsung 17.0": true,
        "samsung 18.0": true,
        "samsung 19.0": true,
        "safari 12": true,
        "safari 12.1": true,
        "safari 13": true,
        "safari 13.1": true,
        "safari 14": true,
        "safari 14.1": true,
        "safari 15": true,
        "safari 15.1": true,
        "safari 15.2-15.3": true,
        "safari 15.4": true,
        "safari 15.5": true,
        "safari 15.6": true,
        "safari 16.0": true,
        "safari 16.1": true,
        "safari 16.2": true,
        "opera 23": true,
        "opera 24": true,
        "opera 25": true,
        "opera 26": true,
        "opera 27": true,
        "opera 28": true,
        "opera 29": true,
        "opera 30": true,
        "opera 31": true,
        "opera 32": true,
        "opera 33": true,
        "opera 34": true,
        "opera 35": true,
        "opera 36": true,
        "opera 37": true,
        "opera 38": true,
        "opera 39": true,
        "opera 40": true,
        "opera 41": true,
        "opera 42": true,
        "opera 43": true,
        "opera 44": true,
        "opera 45": true,
        "opera 46": true,
        "opera 47": true,
        "opera 48": true,
        "opera 49": true,
        "opera 50": true,
        "opera 51": true,
        "opera 52": true,
        "opera 53": true,
        "opera 54": true,
        "opera 55": true,
        "opera 56": true,
        "opera 57": true,
        "opera 58": true,
        "opera 60": true,
        "opera 62": true,
        "opera 63": true,
        "opera 64": true,
        "opera 65": true,
        "opera 66": true,
        "opera 67": true,
        "opera 68": true,
        "opera 69": true,
        "opera 70": true,
        "opera 71": true,
        "opera 72": true,
        "opera 73": true,
        "opera 74": true,
        "opera 75": true,
        "opera 76": true,
        "opera 77": true,
        "opera 78": true,
        "opera 79": true,
        "opera 80": true,
        "opera 81": true,
        "opera 82": true,
        "opera 83": true,
        "opera 84": true,
        "opera 85": true,
        "opera 86": true,
        "opera 87": true,
        "opera 88": true,
        "opera 89": true,
        "opera 90": true,
        "opera 91": true,
        "opera 92": true,
        "op_mob 72": true,
        "kaios 2.5": true,
        "ios_saf 10.0-10.2": true,
        "ios_saf 10.3": true,
        "ios_saf 11.0-11.2": true,
        "ios_saf 11.3-11.4": true,
        "ios_saf 12.0-12.1": true,
        "ios_saf 12.2-12.5": true,
        "ios_saf 13.0-13.1": true,
        "ios_saf 13.2": true,
        "ios_saf 13.3": true,
        "ios_saf 13.4-13.7": true,
        "ios_saf 14.0-14.4": true,
        "ios_saf 14.5-14.8": true,
        "ios_saf 15.0-15.1": true,
        "ios_saf 15.2-15.3": true,
        "ios_saf 15.4": true,
        "ios_saf 15.5": true,
        "ios_saf 15.6": true,
        "ios_saf 16.0": true,
        "ios_saf 16.1": true,
        "firefox 39": true,
        "firefox 40": true,
        "firefox 41": true,
        "firefox 42": true,
        "firefox 43": true,
        "firefox 44": true,
        "firefox 45": true,
        "firefox 46": true,
        "firefox 47": true,
        "firefox 48": true,
        "firefox 49": true,
        "firefox 50": true,
        "firefox 51": true,
        "firefox 52": true,
        "firefox 53": true,
        "firefox 54": true,
        "firefox 55": true,
        "firefox 56": true,
        "firefox 57": true,
        "firefox 58": true,
        "firefox 59": true,
        "firefox 60": true,
        "firefox 61": true,
        "firefox 62": true,
        "firefox 63": true,
        "firefox 64": true,
        "firefox 65": true,
        "firefox 66": true,
        "firefox 67": true,
        "firefox 68": true,
        "firefox 69": true,
        "firefox 70": true,
        "firefox 71": true,
        "firefox 72": true,
        "firefox 73": true,
        "firefox 74": true,
        "firefox 75": true,
        "firefox 76": true,
        "firefox 77": true,
        "firefox 78": true,
        "firefox 79": true,
        "firefox 80": true,
        "firefox 81": true,
        "firefox 82": true,
        "firefox 83": true,
        "firefox 84": true,
        "firefox 85": true,
        "firefox 86": true,
        "firefox 87": true,
        "firefox 88": true,
        "firefox 89": true,
        "firefox 90": true,
        "firefox 91": true,
        "firefox 92": true,
        "firefox 93": true,
        "firefox 94": true,
        "firefox 95": true,
        "firefox 96": true,
        "firefox 97": true,
        "firefox 98": true,
        "firefox 99": true,
        "firefox 100": true,
        "firefox 101": true,
        "firefox 102": true,
        "firefox 103": true,
        "firefox 104": true,
        "firefox 105": true,
        "firefox 106": true,
        "firefox 107": true,
        "firefox 108": true,
        "edge 14": true,
        "edge 15": true,
        "edge 16": true,
        "edge 17": true,
        "edge 18": true,
        "edge 80": true,
        "edge 81": true,
        "edge 83": true,
        "edge 84": true,
        "edge 85": true,
        "edge 86": true,
        "edge 87": true,
        "edge 88": true,
        "edge 89": true,
        "edge 90": true,
        "edge 91": true,
        "edge 92": true,
        "edge 93": true,
        "edge 94": true,
        "edge 95": true,
        "edge 96": true,
        "edge 97": true,
        "edge 98": true,
        "edge 99": true,
        "edge 100": true,
        "edge 101": true,
        "edge 102": true,
        "edge 103": true,
        "edge 104": true,
        "edge 105": true,
        "edge 106": true,
        "edge 107": true,
        "chrome 36": true,
        "chrome 37": true,
        "chrome 38": true,
        "chrome 39": true,
        "chrome 40": true,
        "chrome 41": true,
        "chrome 42": true,
        "chrome 43": true,
        "chrome 44": true,
        "chrome 45": true,
        "chrome 46": true,
        "chrome 47": true,
        "chrome 48": true,
        "chrome 49": true,
        "chrome 50": true,
        "chrome 51": true,
        "chrome 52": true,
        "chrome 53": true,
        "chrome 54": true,
        "chrome 55": true,
        "chrome 56": true,
        "chrome 57": true,
        "chrome 58": true,
        "chrome 59": true,
        "chrome 60": true,
        "chrome 61": true,
        "chrome 62": true,
        "chrome 63": true,
        "chrome 64": true,
        "chrome 65": true,
        "chrome 66": true,
        "chrome 67": true,
        "chrome 68": true,
        "chrome 69": true,
        "chrome 70": true,
        "chrome 71": true,
        "chrome 72": true,
        "chrome 73": true,
        "chrome 74": true,
        "chrome 75": true,
        "chrome 76": true,
        "chrome 77": true,
        "chrome 78": true,
        "chrome 79": true,
        "chrome 80": true,
        "chrome 81": true,
        "chrome 83": true,
        "chrome 84": true,
        "chrome 85": true,
        "chrome 86": true,
        "chrome 87": true,
        "chrome 88": true,
        "chrome 89": true,
        "chrome 90": true,
        "chrome 91": true,
        "chrome 92": true,
        "chrome 93": true,
        "chrome 94": true,
        "chrome 95": true,
        "chrome 96": true,
        "chrome 97": true,
        "chrome 98": true,
        "chrome 99": true,
        "chrome 100": true,
        "chrome 101": true,
        "chrome 102": true,
        "chrome 103": true,
        "chrome 104": true,
        "chrome 105": true,
        "chrome 106": true,
        "chrome 107": true,
        "chrome 108": true,
        "chrome 109": true,
        "chrome 110": true,
        "and_uc 13.4": true,
        "and_qq 13.1": true,
        "and_ff 107": true,
        "and_chr 108": true,
    },
};
exports.default = data;
