export var BASE_UNITS_RAW = {
    NONE: {
        dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    MASS: {
        dimensions: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    LENGTH: {
        dimensions: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    TIME: {
        dimensions: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    CURRENT: {
        dimensions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    },
    TEMPERATURE: {
        dimensions: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    },
    LUMINOUS_INTENSITY: {
        dimensions: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
    },
    AMOUNT_OF_SUBSTANCE: {
        dimensions: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
    },
    FORCE: {
        dimensions: [1, 1, -2, 0, 0, 0, 0, 0, 0, 0]
    },
    SURFACE: {
        dimensions: [0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    VOLUME: {
        dimensions: [0, 3, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    ENERGY: {
        dimensions: [1, 2, -2, 0, 0, 0, 0, 0, 0, 0]
    },
    POWER: {
        dimensions: [1, 2, -3, 0, 0, 0, 0, 0, 0, 0]
    },
    PRESSURE: {
        dimensions: [1, -1, -2, 0, 0, 0, 0, 0, 0, 0]
    },
    ELECTRIC_CHARGE: {
        dimensions: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]
    },
    ELECTRIC_CAPACITANCE: {
        dimensions: [-1, -2, 4, 2, 0, 0, 0, 0, 0, 0]
    },
    ELECTRIC_POTENTIAL: {
        dimensions: [1, 2, -3, -1, 0, 0, 0, 0, 0, 0]
    },
    ELECTRIC_RESISTANCE: {
        dimensions: [1, 2, -3, -2, 0, 0, 0, 0, 0, 0]
    },
    ELECTRIC_INDUCTANCE: {
        dimensions: [1, 2, -2, -2, 0, 0, 0, 0, 0, 0]
    },
    ELECTRIC_CONDUCTANCE: {
        dimensions: [-1, -2, 3, 2, 0, 0, 0, 0, 0, 0]
    },
    MAGNETIC_FLUX: {
        dimensions: [1, 2, -2, -1, 0, 0, 0, 0, 0, 0]
    },
    MAGNETIC_FLUX_DENSITY: {
        dimensions: [1, 0, -2, -1, 0, 0, 0, 0, 0, 0]
    },
    FREQUENCY: {
        dimensions: [0, 0, -1, 0, 0, 0, 0, 0, 0, 0]
    },
    ANGLE: {
        dimensions: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
    },
    BIT: {
        dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
    },
    DENSITY: {
        dimensions: [1, -3, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    CURRENCY: {
        dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    }
};
export var PREFIXES_RAW = {
    NONE: {
        '': {
            name: '',
            value: 1,
            scientific: true
        }
    },
    SHORT: {
        '': {
            name: '',
            value: 1,
            scientific: true
        },
        da: {
            name: 'da',
            value: 1e1,
            scientific: false
        },
        h: {
            name: 'h',
            value: 1e2,
            scientific: false
        },
        k: {
            name: 'k',
            value: 1e3,
            scientific: true
        },
        M: {
            name: 'M',
            value: 1e6,
            scientific: true
        },
        G: {
            name: 'G',
            value: 1e9,
            scientific: true
        },
        T: {
            name: 'T',
            value: 1e12,
            scientific: true
        },
        P: {
            name: 'P',
            value: 1e15,
            scientific: true
        },
        E: {
            name: 'E',
            value: 1e18,
            scientific: true
        },
        Z: {
            name: 'Z',
            value: 1e21,
            scientific: true
        },
        Y: {
            name: 'Y',
            value: 1e24,
            scientific: true
        },
        d: {
            name: 'd',
            value: 1e-1,
            scientific: false
        },
        c: {
            name: 'c',
            value: 1e-2,
            scientific: false
        },
        m: {
            name: 'm',
            value: 1e-3,
            scientific: true
        },
        u: {
            name: 'u',
            value: 1e-6,
            scientific: true
        },
        n: {
            name: 'n',
            value: 1e-9,
            scientific: true
        },
        p: {
            name: 'p',
            value: 1e-12,
            scientific: true
        },
        f: {
            name: 'f',
            value: 1e-15,
            scientific: true
        },
        a: {
            name: 'a',
            value: 1e-18,
            scientific: true
        },
        z: {
            name: 'z',
            value: 1e-21,
            scientific: true
        },
        y: {
            name: 'y',
            value: 1e-24,
            scientific: true
        }
    },
    LONG: {
        '': {
            name: '',
            value: 1,
            scientific: true
        },
        deca: {
            name: 'deca',
            value: 1e1,
            scientific: false
        },
        hecto: {
            name: 'hecto',
            value: 1e2,
            scientific: false
        },
        kilo: {
            name: 'kilo',
            value: 1e3,
            scientific: true
        },
        mega: {
            name: 'mega',
            value: 1e6,
            scientific: true
        },
        giga: {
            name: 'giga',
            value: 1e9,
            scientific: true
        },
        tera: {
            name: 'tera',
            value: 1e12,
            scientific: true
        },
        peta: {
            name: 'peta',
            value: 1e15,
            scientific: true
        },
        exa: {
            name: 'exa',
            value: 1e18,
            scientific: true
        },
        zetta: {
            name: 'zetta',
            value: 1e21,
            scientific: true
        },
        yotta: {
            name: 'yotta',
            value: 1e24,
            scientific: true
        },
        deci: {
            name: 'deci',
            value: 1e-1,
            scientific: false
        },
        centi: {
            name: 'centi',
            value: 1e-2,
            scientific: false
        },
        milli: {
            name: 'milli',
            value: 1e-3,
            scientific: true
        },
        micro: {
            name: 'micro',
            value: 1e-6,
            scientific: true
        },
        nano: {
            name: 'nano',
            value: 1e-9,
            scientific: true
        },
        pico: {
            name: 'pico',
            value: 1e-12,
            scientific: true
        },
        femto: {
            name: 'femto',
            value: 1e-15,
            scientific: true
        },
        atto: {
            name: 'atto',
            value: 1e-18,
            scientific: true
        },
        zepto: {
            name: 'zepto',
            value: 1e-21,
            scientific: true
        },
        yocto: {
            name: 'yocto',
            value: 1e-24,
            scientific: true
        }
    },
    SQUARED: {
        '': {
            name: '',
            value: 1,
            scientific: true
        },
        da: {
            name: 'da',
            value: 1e2,
            scientific: false
        },
        h: {
            name: 'h',
            value: 1e4,
            scientific: false
        },
        k: {
            name: 'k',
            value: 1e6,
            scientific: true
        },
        M: {
            name: 'M',
            value: 1e12,
            scientific: true
        },
        G: {
            name: 'G',
            value: 1e18,
            scientific: true
        },
        T: {
            name: 'T',
            value: 1e24,
            scientific: true
        },
        P: {
            name: 'P',
            value: 1e30,
            scientific: true
        },
        E: {
            name: 'E',
            value: 1e36,
            scientific: true
        },
        Z: {
            name: 'Z',
            value: 1e42,
            scientific: true
        },
        Y: {
            name: 'Y',
            value: 1e48,
            scientific: true
        },
        d: {
            name: 'd',
            value: 1e-2,
            scientific: false
        },
        c: {
            name: 'c',
            value: 1e-4,
            scientific: false
        },
        m: {
            name: 'm',
            value: 1e-6,
            scientific: true
        },
        u: {
            name: 'u',
            value: 1e-12,
            scientific: true
        },
        n: {
            name: 'n',
            value: 1e-18,
            scientific: true
        },
        p: {
            name: 'p',
            value: 1e-24,
            scientific: true
        },
        f: {
            name: 'f',
            value: 1e-30,
            scientific: true
        },
        a: {
            name: 'a',
            value: 1e-36,
            scientific: true
        },
        z: {
            name: 'z',
            value: 1e-42,
            scientific: true
        },
        y: {
            name: 'y',
            value: 1e-48,
            scientific: true
        }
    },
    SQUARED_LONG: {
        '': {
            name: '',
            value: 1,
            scientific: true
        },
        deca: {
            name: 'deca',
            value: 1e2,
            scientific: false
        },
        hecto: {
            name: 'hecto',
            value: 1e4,
            scientific: false
        },
        kilo: {
            name: 'kilo',
            value: 1e6,
            scientific: true
        },
        mega: {
            name: 'mega',
            value: 1e12,
            scientific: true
        },
        giga: {
            name: 'giga',
            value: 1e18,
            scientific: true
        },
        tera: {
            name: 'tera',
            value: 1e24,
            scientific: true
        },
        peta: {
            name: 'peta',
            value: 1e30,
            scientific: true
        },
        exa: {
            name: 'exa',
            value: 1e36,
            scientific: true
        },
        zetta: {
            name: 'zetta',
            value: 1e42,
            scientific: true
        },
        yotta: {
            name: 'yotta',
            value: 1e48,
            scientific: true
        },
        deci: {
            name: 'deci',
            value: 1e-2,
            scientific: false
        },
        centi: {
            name: 'centi',
            value: 1e-4,
            scientific: false
        },
        milli: {
            name: 'milli',
            value: 1e-6,
            scientific: true
        },
        micro: {
            name: 'micro',
            value: 1e-12,
            scientific: true
        },
        nano: {
            name: 'nano',
            value: 1e-18,
            scientific: true
        },
        pico: {
            name: 'pico',
            value: 1e-24,
            scientific: true
        },
        femto: {
            name: 'femto',
            value: 1e-30,
            scientific: true
        },
        atto: {
            name: 'atto',
            value: 1e-36,
            scientific: true
        },
        zepto: {
            name: 'zepto',
            value: 1e-42,
            scientific: true
        },
        yocto: {
            name: 'yocto',
            value: 1e-48,
            scientific: true
        }
    },
    CUBIC: {
        '': {
            name: '',
            value: 1,
            scientific: true
        },
        da: {
            name: 'da',
            value: 1e3,
            scientific: false
        },
        h: {
            name: 'h',
            value: 1e6,
            scientific: false
        },
        k: {
            name: 'k',
            value: 1e9,
            scientific: true
        },
        M: {
            name: 'M',
            value: 1e18,
            scientific: true
        },
        G: {
            name: 'G',
            value: 1e27,
            scientific: true
        },
        T: {
            name: 'T',
            value: 1e36,
            scientific: true
        },
        P: {
            name: 'P',
            value: 1e45,
            scientific: true
        },
        E: {
            name: 'E',
            value: 1e54,
            scientific: true
        },
        Z: {
            name: 'Z',
            value: 1e63,
            scientific: true
        },
        Y: {
            name: 'Y',
            value: 1e72,
            scientific: true
        },
        d: {
            name: 'd',
            value: 1e-3,
            scientific: false
        },
        c: {
            name: 'c',
            value: 1e-6,
            scientific: false
        },
        m: {
            name: 'm',
            value: 1e-9,
            scientific: true
        },
        u: {
            name: 'u',
            value: 1e-18,
            scientific: true
        },
        n: {
            name: 'n',
            value: 1e-27,
            scientific: true
        },
        p: {
            name: 'p',
            value: 1e-36,
            scientific: true
        },
        f: {
            name: 'f',
            value: 1e-45,
            scientific: true
        },
        a: {
            name: 'a',
            value: 1e-54,
            scientific: true
        },
        z: {
            name: 'z',
            value: 1e-63,
            scientific: true
        },
        y: {
            name: 'y',
            value: 1e-72,
            scientific: true
        }
    },
    CUBIC_LONG: {
        '': {
            name: '',
            value: 1,
            scientific: true
        },
        deca: {
            name: 'deca',
            value: 1e3,
            scientific: false
        },
        hecto: {
            name: 'hecto',
            value: 1e6,
            scientific: false
        },
        kilo: {
            name: 'kilo',
            value: 1e9,
            scientific: true
        },
        mega: {
            name: 'mega',
            value: 1e18,
            scientific: true
        },
        giga: {
            name: 'giga',
            value: 1e27,
            scientific: true
        },
        tera: {
            name: 'tera',
            value: 1e36,
            scientific: true
        },
        peta: {
            name: 'peta',
            value: 1e45,
            scientific: true
        },
        exa: {
            name: 'exa',
            value: 1e54,
            scientific: true
        },
        zetta: {
            name: 'zetta',
            value: 1e63,
            scientific: true
        },
        yotta: {
            name: 'yotta',
            value: 1e72,
            scientific: true
        },
        deci: {
            name: 'deci',
            value: 1e-3,
            scientific: false
        },
        centi: {
            name: 'centi',
            value: 1e-6,
            scientific: false
        },
        milli: {
            name: 'milli',
            value: 1e-9,
            scientific: true
        },
        micro: {
            name: 'micro',
            value: 1e-18,
            scientific: true
        },
        nano: {
            name: 'nano',
            value: 1e-27,
            scientific: true
        },
        pico: {
            name: 'pico',
            value: 1e-36,
            scientific: true
        },
        femto: {
            name: 'femto',
            value: 1e-45,
            scientific: true
        },
        atto: {
            name: 'atto',
            value: 1e-54,
            scientific: true
        },
        zepto: {
            name: 'zepto',
            value: 1e-63,
            scientific: true
        },
        yocto: {
            name: 'yocto',
            value: 1e-72,
            scientific: true
        }
    },
    BINARY_SHORT_SI: {
        '': {
            name: '',
            value: 1,
            scientific: true
        },
        k: {
            name: 'k',
            value: 1e3,
            scientific: true
        },
        M: {
            name: 'M',
            value: 1e6,
            scientific: true
        },
        G: {
            name: 'G',
            value: 1e9,
            scientific: true
        },
        T: {
            name: 'T',
            value: 1e12,
            scientific: true
        },
        P: {
            name: 'P',
            value: 1e15,
            scientific: true
        },
        E: {
            name: 'E',
            value: 1e18,
            scientific: true
        },
        Z: {
            name: 'Z',
            value: 1e21,
            scientific: true
        },
        Y: {
            name: 'Y',
            value: 1e24,
            scientific: true
        }
    },
    BINARY_SHORT_IEC: {
        '': {
            name: '',
            value: 1,
            scientific: true
        },
        Ki: {
            name: 'Ki',
            value: 1024,
            scientific: true
        },
        Mi: {
            name: 'Mi',
            value: Math.pow(1024, 2),
            scientific: true
        },
        Gi: {
            name: 'Gi',
            value: Math.pow(1024, 3),
            scientific: true
        },
        Ti: {
            name: 'Ti',
            value: Math.pow(1024, 4),
            scientific: true
        },
        Pi: {
            name: 'Pi',
            value: Math.pow(1024, 5),
            scientific: true
        },
        Ei: {
            name: 'Ei',
            value: Math.pow(1024, 6),
            scientific: true
        },
        Zi: {
            name: 'Zi',
            value: Math.pow(1024, 7),
            scientific: true
        },
        Yi: {
            name: 'Yi',
            value: Math.pow(1024, 8),
            scientific: true
        }
    },
    BINARY_LONG_SI: {
        '': {
            name: '',
            value: 1,
            scientific: true
        },
        kilo: {
            name: 'kilo',
            value: 1e3,
            scientific: true
        },
        mega: {
            name: 'mega',
            value: 1e6,
            scientific: true
        },
        giga: {
            name: 'giga',
            value: 1e9,
            scientific: true
        },
        tera: {
            name: 'tera',
            value: 1e12,
            scientific: true
        },
        peta: {
            name: 'peta',
            value: 1e15,
            scientific: true
        },
        exa: {
            name: 'exa',
            value: 1e18,
            scientific: true
        },
        zetta: {
            name: 'zetta',
            value: 1e21,
            scientific: true
        },
        yotta: {
            name: 'yotta',
            value: 1e24,
            scientific: true
        }
    },
    BINARY_LONG_IEC: {
        '': {
            name: '',
            value: 1,
            scientific: true
        },
        kibi: {
            name: 'kibi',
            value: 1024,
            scientific: true
        },
        mebi: {
            name: 'mebi',
            value: Math.pow(1024, 2),
            scientific: true
        },
        gibi: {
            name: 'gibi',
            value: Math.pow(1024, 3),
            scientific: true
        },
        tebi: {
            name: 'tebi',
            value: Math.pow(1024, 4),
            scientific: true
        },
        pebi: {
            name: 'pebi',
            value: Math.pow(1024, 5),
            scientific: true
        },
        exi: {
            name: 'exi',
            value: Math.pow(1024, 6),
            scientific: true
        },
        zebi: {
            name: 'zebi',
            value: Math.pow(1024, 7),
            scientific: true
        },
        yobi: {
            name: 'yobi',
            value: Math.pow(1024, 8),
            scientific: true
        }
    },
    BTU: {
        '': {
            name: '',
            value: 1,
            scientific: true
        },
        MM: {
            name: 'MM',
            value: 1e6,
            scientific: true
        }
    }
};

export var UNITS_RAW = (Complex={I:1},BASE_UNITS=BASE_UNITS_RAW,PREFIXES=PREFIXES_RAW) => {
    return ({
    // length
    meter: {
        name: 'meter',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    inch: {
        name: 'inch',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 0.0254,
        offset: 0
    },
    foot: {
        name: 'foot',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 0.3048,
        offset: 0
    },
    yard: {
        name: 'yard',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 0.9144,
        offset: 0
    },
    mile: {
        name: 'mile',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 1609.344,
        offset: 0
    },
    link: {
        name: 'link',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 0.201168,
        offset: 0
    },
    rod: {
        name: 'rod',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 5.0292,
        offset: 0
    },
    chain: {
        name: 'chain',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 20.1168,
        offset: 0
    },
    angstrom: {
        name: 'angstrom',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 1e-10,
        offset: 0
    },
    m: {
        name: 'm',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    in: {
        name: 'in',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 0.0254,
        offset: 0
    },
    ft: {
        name: 'ft',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 0.3048,
        offset: 0
    },
    yd: {
        name: 'yd',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 0.9144,
        offset: 0
    },
    mi: {
        name: 'mi',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 1609.344,
        offset: 0
    },
    li: {
        name: 'li',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 0.201168,
        offset: 0
    },
    rd: {
        name: 'rd',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 5.0292,
        offset: 0
    },
    ch: {
        name: 'ch',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 20.1168,
        offset: 0
    },
    mil: {
        name: 'mil',
        base: BASE_UNITS.LENGTH,
        prefixes: PREFIXES.NONE,
        value: 0.0000254,
        offset: 0
    },
    // 1/1000 inch

    // Surface
    squaremeter: {
        name: "squaremeter",
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.SQUARED_LONG,
        value: 1,
        offset: 0
    },
    hectare: {
        name: 'hectare',
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 10000,
        offset: 0
    },
    // 10000 m2
    acre: {
        name: 'acre',
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 4046.86,
        offset: 0
    },
    // 4046.86 m2
    squareinch: {
        name: "squareinch",
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 0.00064516,
        offset: 0
    },
    squarefeet: {
        name: "squarefeet",
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 0.09290304,
        offset: 0
    },
    squareyard: {
        name: "squareyard",
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 0.83612736,
        offset: 0
    },
    squaremile: {
        name: "squaremile",
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 2589988.110336,
        offset: 0
    },
    squarerod: {
        name: "squarerod",
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 25.29295,
        offset: 0
    },
    squarechain: {
        name: "squarechain",
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 404.6873,
        offset: 0
    },
    squaremil: {
        name: "squaremil",
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 6.4516e-10,
        offset: 0
    },
    m2: {
        name: 'm2',
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.SQUARED,
        value: 1,
        offset: 0
    },
    sqin: {
        name: 'sqin',
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 0.00064516,
        offset: 0
    },
    // 645.16 mm2
    sqft: {
        name: 'sqft',
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 0.09290304,
        offset: 0
    },
    // 0.09290304 m2
    sqyd: {
        name: 'sqyd',
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 0.83612736,
        offset: 0
    },
    // 0.83612736 m2
    sqmi: {
        name: 'sqmi',
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 2589988.110336,
        offset: 0
    },
    // 2.589988110336 km2
    sqrd: {
        name: 'sqrd',
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 25.29295,
        offset: 0
    },
    // 25.29295 m2
    sqch: {
        name: 'sqch',
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 404.6873,
        offset: 0
    },
    // 404.6873 m2
    sqmil: {
        name: 'sqmil',
        base: BASE_UNITS.SURFACE,
        prefixes: PREFIXES.NONE,
        value: 6.4516e-10,
        offset: 0
    },
    // 6.4516 * 10^-10 m2

    // Volume
    cubicmeter: {
        name: "cubicmeter",
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.CUBIC_LONG,
        value: 1,
        offset: 0
    },
    m3: {
        name: 'm3',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.CUBIC,
        value: 1,
        offset: 0
    },
    // litre
    litre: {
        name: 'litre',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.LONG,
        value: 0.001,
        offset: 0
    },
    L: {
        name: 'L',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.SHORT,
        value: 0.001,
        offset: 0
    },
    // litre
    l: {
        name: 'l',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.SHORT,
        value: 0.001,
        offset: 0
    },
    cuin: {
        name: 'cuin',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 1.6387064e-5,
        offset: 0
    },
    // 1.6387064e-5 m3
    cuft: {
        name: 'cuft',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.028316846592,
        offset: 0
    },
    // 28.316 846 592 L
    cuyd: {
        name: 'cuyd',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.764554857984,
        offset: 0
    },
    // 764.554 857 984 L
    teaspoon: {
        name: 'teaspoon',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.000005,
        offset: 0
    },
    // 5 mL
    tablespoon: {
        name: 'tablespoon',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.000015,
        offset: 0
    },
    // 15 mL
    // {name: 'cup', base: BASE_UNITS.VOLUME, prefixes: PREFIXES.NONE, value: 0.000240, offset: 0}, // 240 mL  // not possible, we have already another cup
    drop: {
        name: 'drop',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 5e-8,
        offset: 0
    },
    // 0.05 mL = 5e-8 m3
    gtt: {
        name: 'gtt',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 5e-8,
        offset: 0
    },
    // 0.05 mL = 5e-8 m3

    // Liquid volume
    minim: {
        name: 'minim',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.00000006161152,
        offset: 0
    },
    // 0.06161152 mL
    fluiddram: {
        name: 'fluiddram',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.0000036966911,
        offset: 0
    },
    // 3.696691 mL
    fluidounce: {
        name: 'fluidounce',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.00002957353,
        offset: 0
    },
    // 29.57353 mL
    gill: {
        name: 'gill',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.0001182941,
        offset: 0
    },
    // 118.2941 mL
    cc: {
        name: 'cc',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 1e-6,
        offset: 0
    },
    // 1e-6 L
    cup: {
        name: 'cup',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.0002365882,
        offset: 0
    },
    // 236.5882 mL
    pint: {
        name: 'pint',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.0004731765,
        offset: 0
    },
    // 473.1765 mL
    quart: {
        name: 'quart',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.0009463529,
        offset: 0
    },
    // 946.3529 mL
    gallon: {
        name: 'gallon',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.003785412,
        offset: 0
    },
    // 3.785412 L
    beerbarrel: {
        name: 'beerbarrel',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.1173478,
        offset: 0
    },
    // 117.3478 L
    oilbarrel: {
        name: 'oilbarrel',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.1589873,
        offset: 0
    },
    // 158.9873 L
    hogshead: {
        name: 'hogshead',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.2384810,
        offset: 0
    },
    // 238.4810 L

    // {name: 'min', base: BASE_UNITS.VOLUME, prefixes: PREFIXES.NONE, value: 0.00000006161152, offset: 0}, // 0.06161152 mL // min is already in use as minute
    fldr: {
        name: 'fldr',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.0000036966911,
        offset: 0
    },
    // 3.696691 mL
    floz: {
        name: 'floz',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.00002957353,
        offset: 0
    },
    // 29.57353 mL
    gi: {
        name: 'gi',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.0001182941,
        offset: 0
    },
    // 118.2941 mL
    cp: {
        name: 'cp',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.0002365882,
        offset: 0
    },
    // 236.5882 mL
    pt: {
        name: 'pt',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.0004731765,
        offset: 0
    },
    // 473.1765 mL
    qt: {
        name: 'qt',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.0009463529,
        offset: 0
    },
    // 946.3529 mL
    gal: {
        name: 'gal',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.003785412,
        offset: 0
    },
    // 3.785412 L
    bbl: {
        name: 'bbl',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.1173478,
        offset: 0
    },
    // 117.3478 L
    obl: {
        name: 'obl',
        base: BASE_UNITS.VOLUME,
        prefixes: PREFIXES.NONE,
        value: 0.1589873,
        offset: 0
    },
    // 158.9873 L
    // {name: 'hogshead', base: BASE_UNITS.VOLUME, prefixes: PREFIXES.NONE, value: 0.2384810, offset: 0}, // 238.4810 L // TODO: hh?

    // Mass
    ounce: {
        name: 'ounce',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 28.349523125e-3,
        offset: 0
    },
    poundmass: {
        name: 'poundmass',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 453.59237e-3,
        offset: 0
    },
    gram: {
        name: 'gram',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.LONG,
        value: 0.001,
        offset: 0
    },
    g: {
        name: 'g',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.SHORT,
        value: 0.001,
        offset: 0
    },
    grain: {
        name: 'grain',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 64.79891e-6,
        offset: 0
    },
    dram: {
        name: 'dram',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 1.7718451953125e-3,
        offset: 0
    },
    tonne: {
        name: 'tonne',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.LONG,
        value: 1000,
        offset: 0
    },
    ton: {
        name: 'ton',
        base: BASE_UNITS.MASS,
        // prefixes: PREFIXES.SHORT,
        prefixes: PREFIXES.NONE,
        value: 907.18474,
        offset: 0
    },
    t: {
        name: 't',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.SHORT,
        value: 1000,
        offset: 0
    },
    hundredweight: {
        name: 'hundredweight',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 45.359237,
        offset: 0
    },
    stick: {
        name: 'stick',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 115e-3,
        offset: 0
    },
    stone: {
        name: 'stone',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 6.35029318,
        offset: 0
    },
    gr: {
        name: 'gr',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 64.79891e-6,
        offset: 0
    },
    dr: {
        name: 'dr',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 1.7718451953125e-3,
        offset: 0
    },
    oz: {
        name: 'oz',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 28.349523125e-3,
        offset: 0
    },
    lbm: {
        name: 'lbm',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 453.59237e-3,
        offset: 0
    },
    cwt: {
        name: 'cwt',
        base: BASE_UNITS.MASS,
        prefixes: PREFIXES.NONE,
        value: 45.359237,
        offset: 0
    },
    // Time
    year: {
        name: 'year',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.NONE,
        value: 31557600,
        // Julian year
        offset: 0
    },
    month: {
        name: 'month',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.NONE,
        value: 2629800,
        // 1/12th of Julian year
        offset: 0
    },
    week: {
        name: 'week',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.NONE,
        value: 7 * 86400,
        offset: 0
    },
    day: {
        name: 'day',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.NONE,
        value: 86400,
        offset: 0
    },
    hour: {
        name: 'hour',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.NONE,
        value: 3600,
        offset: 0
    },
    minute: {
        name: 'minute',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.NONE,
        value: 60,
        offset: 0
    },
    second: {
        name: 'second',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    decade: {
        name: 'decade',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.NONE,
        value: 315576000,
        // Julian decade
        offset: 0
    },
    century: {
        name: 'century',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.NONE,
        value: 3155760000,
        // Julian century
        offset: 0
    },
    millennium: {
        name: 'millennium',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.NONE,
        value: 31557600000,
        // Julian millennium
        offset: 0
    },
    h: {
        name: 'h',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.NONE,
        value: 3600,
        offset: 0
    },
    min: {
        name: 'min',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.NONE,
        value: 60,
        offset: 0
    },
    s: {
        name: 's',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    sec: {
        name: 'sec',
        base: BASE_UNITS.TIME,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    // Frequency
    hertz: {
        name: 'hertz',
        base: BASE_UNITS.FREQUENCY,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0,
        reciprocal: true
    },
    Hz: {
        name: 'Hz',
        base: BASE_UNITS.FREQUENCY,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0,
        reciprocal: true
    },
    // Angle
    radian: {
        name: 'radian',
        base: BASE_UNITS.ANGLE,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    rad: {
        name: 'rad',
        base: BASE_UNITS.ANGLE,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // deg = rad / (2*pi) * 360 = rad / 0.017453292519943295769236907684888
    degree: {
        name: 'degree',
        base: BASE_UNITS.ANGLE,
        prefixes: PREFIXES.LONG,
        value: null,
        // will be filled in by calculateAngleValues()
        offset: 0
    },
    deg: {
        name: 'deg',
        base: BASE_UNITS.ANGLE,
        prefixes: PREFIXES.SHORT,
        value: null,
        // will be filled in by calculateAngleValues()
        offset: 0
    },
    // grad = rad / (2*pi) * 400  = rad / 0.015707963267948966192313216916399
    gradian: {
        name: 'gradian',
        base: BASE_UNITS.ANGLE,
        prefixes: PREFIXES.LONG,
        value: null,
        // will be filled in by calculateAngleValues()
        offset: 0
    },
    grad: {
        name: 'grad',
        base: BASE_UNITS.ANGLE,
        prefixes: PREFIXES.SHORT,
        value: null,
        // will be filled in by calculateAngleValues()
        offset: 0
    },
    // cycle = rad / (2*pi) = rad / 6.2831853071795864769252867665793
    cycle: {
        name: 'cycle',
        base: BASE_UNITS.ANGLE,
        prefixes: PREFIXES.NONE,
        value: null,
        // will be filled in by calculateAngleValues()
        offset: 0
    },
    // arcsec = rad / (3600 * (360 / 2 * pi)) = rad / 0.0000048481368110953599358991410235795
    arcsec: {
        name: 'arcsec',
        base: BASE_UNITS.ANGLE,
        prefixes: PREFIXES.NONE,
        value: null,
        // will be filled in by calculateAngleValues()
        offset: 0
    },
    // arcmin = rad / (60 * (360 / 2 * pi)) = rad / 0.00029088820866572159615394846141477
    arcmin: {
        name: 'arcmin',
        base: BASE_UNITS.ANGLE,
        prefixes: PREFIXES.NONE,
        value: null,
        // will be filled in by calculateAngleValues()
        offset: 0
    },
    // Electric current
    ampere: {
        name: 'ampere',
        base: BASE_UNITS.CURRENT,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    A: {
        name: 'A',
        base: BASE_UNITS.CURRENT,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // Temperature
    // K(C) = °C + 273.15
    // K(F) = (°F + 459.67) / 1.8
    // K(R) = °R / 1.8
    kelvin: {
        name: 'kelvin',
        base: BASE_UNITS.TEMPERATURE,
        // prefixes: PREFIXES.LONG,
        prefixes: PREFIXES.NONE,
        value: 1,
        offset: 0
    },
    celsius: {
        name: 'celsius',
        base: BASE_UNITS.TEMPERATURE,
        // prefixes: PREFIXES.LONG,
        prefixes: PREFIXES.NONE,
        value: 1,
        // offset: 273.15
        offset: 273.15
    },
    fahrenheit: {
        name: 'fahrenheit',
        base: BASE_UNITS.TEMPERATURE,
        // prefixes: PREFIXES.LONG,
        prefixes: PREFIXES.NONE,
        value: 1 / 1.8,
        // offset: 459.67
        offset: 459.67
    },
    rankine: {
        name: 'rankine',
        base: BASE_UNITS.TEMPERATURE,
        // prefixes: PREFIXES.LONG,
        prefixes: PREFIXES.NONE,
        value: 1 / 1.8,
        offset: 0
    },
    K: {
        name: 'K',
        base: BASE_UNITS.TEMPERATURE,
        // prefixes: PREFIXES.SHORT,
        prefixes: PREFIXES.NONE,
        value: 1,
        offset: 0
    },
    degC: {
        name: 'degC',
        base: BASE_UNITS.TEMPERATURE,
        // prefixes: PREFIXES.SHORT,
        prefixes: PREFIXES.NONE,
        value: 1,
        // offset: 273.15
        offset: 273.15
    },
    degF: {
        name: 'degF',
        base: BASE_UNITS.TEMPERATURE,
        // prefixes: PREFIXES.SHORT,
        prefixes: PREFIXES.NONE,
        value: 1 / 1.8,
        // offset: 459.67
        offset: 459.67
    },
    degR: {
        name: 'degR',
        base: BASE_UNITS.TEMPERATURE,
        // prefixes: PREFIXES.SHORT,
        prefixes: PREFIXES.NONE,
        value: 1 / 1.8,
        offset: 0
    },
    // amount of substance
    mole: {
        name: 'mole',
        base: BASE_UNITS.AMOUNT_OF_SUBSTANCE,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    mol: {
        name: 'mol',
        base: BASE_UNITS.AMOUNT_OF_SUBSTANCE,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // luminous intensity
    candela: {
        name: 'candela',
        base: BASE_UNITS.LUMINOUS_INTENSITY,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    cd: {
        name: 'cd',
        base: BASE_UNITS.LUMINOUS_INTENSITY,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // TODO: units STERADIAN
    // {name: 'sr', base: BASE_UNITS.STERADIAN, prefixes: PREFIXES.NONE, value: 1, offset: 0},
    // {name: 'steradian', base: BASE_UNITS.STERADIAN, prefixes: PREFIXES.NONE, value: 1, offset: 0},

    // Force
    newton: {
        name: 'newton',
        base: BASE_UNITS.FORCE,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    N: {
        name: 'N',
        base: BASE_UNITS.FORCE,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    dyne: {
        name: 'dyne',
        base: BASE_UNITS.FORCE,
        prefixes: PREFIXES.LONG,
        value: 0.00001,
        offset: 0
    },
    dyn: {
        name: 'dyn',
        base: BASE_UNITS.FORCE,
        prefixes: PREFIXES.SHORT,
        value: 0.00001,
        offset: 0
    },
    poundforce: {
        name: 'poundforce',
        base: BASE_UNITS.FORCE,
        prefixes: PREFIXES.NONE,
        value: 4.4482216152605,
        offset: 0
    },
    lbf: {
        name: 'lbf',
        base: BASE_UNITS.FORCE,
        prefixes: PREFIXES.NONE,
        value: 4.4482216152605,
        offset: 0
    },
    kilogramforce: {
        name: 'kilogramforce',
        base: BASE_UNITS.FORCE,
        prefixes: PREFIXES.NONE,
        value: 9.80665,
        offset: 0
    },
    kip: {
        name: 'kip',
        base: BASE_UNITS.FORCE,
        prefixes: PREFIXES.LONG,
        value: 4448.2216,
        offset: 0
    },
    // Energy
    joule: {
        name: 'joule',
        base: BASE_UNITS.ENERGY,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    J: {
        name: 'J',
        base: BASE_UNITS.ENERGY,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    erg: {
        name: 'erg',
        base: BASE_UNITS.ENERGY,
        prefixes: PREFIXES.NONE,
        value: 1e-7,
        offset: 0
    },
    Watthour: {
        name: 'Watthour',
        base: BASE_UNITS.ENERGY,
        prefixes: PREFIXES.LONG,
        value: 3600,
        offset: 0
    },
    Wh: {
        name: 'Wh',
        base: BASE_UNITS.ENERGY,
        prefixes: PREFIXES.SHORT,
        value: 3600,
        offset: 0
    },
    BritishThermalUnit: {
        name: 'BritishThermalUnit',
        base: BASE_UNITS.ENERGY,
        prefixes: PREFIXES.BTU,
        value: 1055.05585262,
        offset: 0
    },
    BTU: {
        name: 'BTU',
        base: BASE_UNITS.ENERGY,
        prefixes: PREFIXES.BTU,
        value: 1055.05585262,
        offset: 0
    },
    electronvolt: {
        name: 'electronvolt',
        base: BASE_UNITS.ENERGY,
        prefixes: PREFIXES.LONG,
        value: 1.602176565e-19,
        offset: 0
    },
    eV: {
        name: 'eV',
        base: BASE_UNITS.ENERGY,
        prefixes: PREFIXES.SHORT,
        value: 1.602176565e-19,
        offset: 0
    },
    // Power
    watt: {
        name: 'watt',
        base: BASE_UNITS.POWER,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    horsepower: {
        name: 'horsepower',
        base: BASE_UNITS.POWER,
        prefixes: PREFIXES.NONE,
        value: 745.6998715386,
        offset: 0
    },
    hp: {
        name: 'hp',
        base: BASE_UNITS.POWER,
        prefixes: PREFIXES.NONE,
        value: 745.6998715386,
        offset: 0
    },
    W: {
        name: 'W',
        base: BASE_UNITS.POWER,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // Electrical power units
    VAR: {
        name: 'VAR',
        base: BASE_UNITS.POWER,
        prefixes: PREFIXES.SHORT,
        value: Complex.I,
        offset: 0
    },
    VA: {
        name: 'VA',
        base: BASE_UNITS.POWER,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // Pressure
    Pascal: {
        name: 'Pascal',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    Pa: {
        name: 'Pa',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    poundspersquareinch: {
        name: 'poundspersquareinch',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.NONE,
        value: 6894.75729276459,
        offset: 0
    },
    psi: {
        name: 'psi',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.NONE,
        value: 6894.75729276459,
        offset: 0
    },
    atm: {
        name: 'atm',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.NONE,
        value: 101325,
        offset: 0
    },
    bar: {
        name: 'bar',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.SHORTLONG,
        value: 100000,
        offset: 0
    },
    millimeterofmercury: {
        name: 'millimeterofmercury',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.NONE,
        value: 133.322,
        offset: 0
    },
    mmHg: {
        name: 'mmHg',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.NONE,
        value: 133.322,
        offset: 0
    },
    torr: {
        name: 'torr',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.NONE,
        value: 133.322,
        offset: 0
    },
    millimeterofwaterat4degreesCelsius: {
        name: 'millimeterofwaterat4degreesCelsius',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.NONE,
        value: 9.80665,
        offset: 0
    },
    mmH2O: {
        name: 'mmH2O',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.NONE,
        value: 9.80665,
        offset: 0
    },
    centimeterofwaterat4degreesCelsius: {
        name: 'centimeterofwaterat4degreesCelsius',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.NONE,
        value: 98.0665,
        offset: 0
    },
    cmH2O: {
        name: 'cmH2O',
        base: BASE_UNITS.PRESSURE,
        prefixes: PREFIXES.NONE,
        value: 98.0665,
        offset: 0
    },
    // Electric charge
    coulomb: {
        name: 'coulomb',
        base: BASE_UNITS.ELECTRIC_CHARGE,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    C: {
        name: 'C',
        base: BASE_UNITS.ELECTRIC_CHARGE,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // Electric capacitance
    farad: {
        name: 'farad',
        base: BASE_UNITS.ELECTRIC_CAPACITANCE,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    F: {
        name: 'F',
        base: BASE_UNITS.ELECTRIC_CAPACITANCE,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // Electric potential
    volt: {
        name: 'volt',
        base: BASE_UNITS.ELECTRIC_POTENTIAL,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    V: {
        name: 'V',
        base: BASE_UNITS.ELECTRIC_POTENTIAL,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // Electric resistance
    ohm: {
        name: 'ohm',
        base: BASE_UNITS.ELECTRIC_RESISTANCE,
        prefixes: PREFIXES.LONG,
        // Both Mohm and megaohm are acceptable
        value: 1,
        offset: 0
    },
    Ω: {
        name: 'Ω',
        base: BASE_UNITS.ELECTRIC_RESISTANCE,
        prefixes: PREFIXES.SHORT,
        // Both Mohm and megaohm are acceptable
        value: 1,
        offset: 0
    },
    /*
     * Unicode breaks in browsers if charset is not specified
    Ω: {
      name: 'Ω',
      base: BASE_UNITS.ELECTRIC_RESISTANCE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    */
    // Electric inductance
    henry: {
        name: 'henry',
        base: BASE_UNITS.ELECTRIC_INDUCTANCE,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    H: {
        name: 'H',
        base: BASE_UNITS.ELECTRIC_INDUCTANCE,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // Electric conductance
    siemens: {
        name: 'siemens',
        base: BASE_UNITS.ELECTRIC_CONDUCTANCE,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    S: {
        name: 'S',
        base: BASE_UNITS.ELECTRIC_CONDUCTANCE,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // Magnetic flux
    weber: {
        name: 'weber',
        base: BASE_UNITS.MAGNETIC_FLUX,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    Wb: {
        name: 'Wb',
        base: BASE_UNITS.MAGNETIC_FLUX,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // Magnetic flux density
    tesla: {
        name: 'tesla',
        base: BASE_UNITS.MAGNETIC_FLUX_DENSITY,
        prefixes: PREFIXES.LONG,
        value: 1,
        offset: 0
    },
    T: {
        name: 'T',
        base: BASE_UNITS.MAGNETIC_FLUX_DENSITY,
        prefixes: PREFIXES.SHORT,
        value: 1,
        offset: 0
    },
    // Binary
    bits: {
        name: 'bits',
        base: BASE_UNITS.BIT,
        prefixes: PREFIXES.BINARY_LONG,
        value: 1,
        offset: 0
    },
    b: {
        name: 'b',
        base: BASE_UNITS.BIT,
        prefixes: PREFIXES.BINARY_SHORT,
        value: 1,
        offset: 0
    },
    bytes: {
        name: 'bytes',
        base: BASE_UNITS.BIT,
        prefixes: PREFIXES.BINARY_LONG,
        value: 8,
        offset: 0
    },
    B: {
        name: 'B',
        base: BASE_UNITS.BIT,
        prefixes: PREFIXES.BINARY_SHORT,
        value: 8,
        offset: 0
    },
    USDollar: {
        name: 'USDollar',
        base: BASE_UNITS.CURRENCY,
        prefixes: PREFIXES.NONE,
        value: 1,
        offset: 0
    }
})};

export var ALIASES_RAW = {
    meters: 'meter',
    inches: 'inch',
    feet: 'foot',
    yards: 'yard',
    miles: 'mile',
    links: 'link',
    rods: 'rod',
    chains: 'chain',
    angstroms: 'angstrom',
    lt: 'l',
    litres: 'litre',
    liter: 'litre',
    liters: 'litre',
    teaspoons: 'teaspoon',
    tablespoons: 'tablespoon',
    minims: 'minim',
    fluiddrams: 'fluiddram',
    fluidounces: 'fluidounce',
    gills: 'gill',
    cups: 'cup',
    pints: 'pint',
    quarts: 'quart',
    gallons: 'gallon',
    beerbarrels: 'beerbarrel',
    oilbarrels: 'oilbarrel',
    hogsheads: 'hogshead',
    gtts: 'gtt',
    grams: 'gram',
    tons: 'ton',
    tonnes: 'tonne',
    grains: 'grain',
    drams: 'dram',
    ounces: 'ounce',
    poundmasses: 'poundmass',
    hundredweights: 'hundredweight',
    sticks: 'stick',
    lb: 'lbm',
    lbs: 'lbm',
    kips: 'kip',
    kgf: 'kilogramforce',
    acres: 'acre',
    hectares: 'hectare',
    sqfeet: 'sqft',
    sqyard: 'sqyd',
    sqmile: 'sqmi',
    sqmiles: 'sqmi',
    mmhg: 'mmHg',
    mmh2o: 'mmH2O',
    cmh2o: 'cmH2O',
    seconds: 'second',
    secs: 'second',
    minutes: 'minute',
    mins: 'minute',
    hours: 'hour',
    hr: 'hour',
    hrs: 'hour',
    days: 'day',
    weeks: 'week',
    months: 'month',
    years: 'year',
    decades: 'decade',
    centuries: 'century',
    millennia: 'millennium',
    hertz: 'hertz',
    radians: 'radian',
    degrees: 'degree',
    gradians: 'gradian',
    cycles: 'cycle',
    arcsecond: 'arcsec',
    arcseconds: 'arcsec',
    arcminute: 'arcmin',
    arcminutes: 'arcmin',
    BTUs: 'BTU',
    watts: 'watt',
    joules: 'joule',
    amperes: 'ampere',
    coulombs: 'coulomb',
    volts: 'volt',
    ohms: 'ohm',
    farads: 'farad',
    webers: 'weber',
    teslas: 'tesla',
    electronvolts: 'electronvolt',
    moles: 'mole',
    bit: 'bits',
    byte: 'bytes'
};

export var UNIT_SYSTEMS_RAW = (UNIT_NONE, UNITS, PREFIXES) => {
    var UNIT_SYSTEMS = {
        si: {
          // Base units
          NONE: {
            unit: UNIT_NONE,
            prefix: PREFIXES.NONE['']
          },
          LENGTH: {
            unit: UNITS.m,
            prefix: PREFIXES.SHORT['']
          },
          MASS: {
            unit: UNITS.g,
            prefix: PREFIXES.SHORT.k
          },
          TIME: {
            unit: UNITS.s,
            prefix: PREFIXES.SHORT['']
          },
          CURRENT: {
            unit: UNITS.A,
            prefix: PREFIXES.SHORT['']
          },
          TEMPERATURE: {
            unit: UNITS.K,
            prefix: PREFIXES.SHORT['']
          },
          LUMINOUS_INTENSITY: {
            unit: UNITS.cd,
            prefix: PREFIXES.SHORT['']
          },
          AMOUNT_OF_SUBSTANCE: {
            unit: UNITS.mol,
            prefix: PREFIXES.SHORT['']
          },
          ANGLE: {
            unit: UNITS.rad,
            prefix: PREFIXES.SHORT['']
          },
          BIT: {
            unit: UNITS.bits,
            prefix: PREFIXES.SHORT['']
          },
          // Derived units
          FORCE: {
            unit: UNITS.N,
            prefix: PREFIXES.SHORT['']
          },
          ENERGY: {
            unit: UNITS.J,
            prefix: PREFIXES.SHORT['']
          },
          POWER: {
            unit: UNITS.W,
            prefix: PREFIXES.SHORT['']
          },
          PRESSURE: {
            unit: UNITS.Pa,
            prefix: PREFIXES.SHORT['']
          },
          ELECTRIC_CHARGE: {
            unit: UNITS.C,
            prefix: PREFIXES.SHORT['']
          },
          ELECTRIC_CAPACITANCE: {
            unit: UNITS.F,
            prefix: PREFIXES.SHORT['']
          },
          ELECTRIC_POTENTIAL: {
            unit: UNITS.V,
            prefix: PREFIXES.SHORT['']
          },
          ELECTRIC_RESISTANCE: {
            unit: UNITS.ohm,
            prefix: PREFIXES.SHORT['']
          },
          ELECTRIC_INDUCTANCE: {
            unit: UNITS.H,
            prefix: PREFIXES.SHORT['']
          },
          ELECTRIC_CONDUCTANCE: {
            unit: UNITS.S,
            prefix: PREFIXES.SHORT['']
          },
          MAGNETIC_FLUX: {
            unit: UNITS.Wb,
            prefix: PREFIXES.SHORT['']
          },
          MAGNETIC_FLUX_DENSITY: {
            unit: UNITS.T,
            prefix: PREFIXES.SHORT['']
          },
          FREQUENCY: {
            unit: UNITS.Hz,
            prefix: PREFIXES.SHORT['']
          }
        }
      };
    
      // Clone to create the other unit systems
      UNIT_SYSTEMS.cgs = JSON.parse(JSON.stringify(UNIT_SYSTEMS.si));
      UNIT_SYSTEMS.cgs.LENGTH = {
        unit: UNITS.m,
        prefix: PREFIXES.SHORT.c
      };
      UNIT_SYSTEMS.cgs.MASS = {
        unit: UNITS.g,
        prefix: PREFIXES.SHORT['']
      };
      UNIT_SYSTEMS.cgs.FORCE = {
        unit: UNITS.dyn,
        prefix: PREFIXES.SHORT['']
      };
      UNIT_SYSTEMS.cgs.ENERGY = {
        unit: UNITS.erg,
        prefix: PREFIXES.NONE['']
      };
      // there are wholly 4 unique cgs systems for electricity and magnetism,
      // so let's not worry about it unless somebody complains
    
      UNIT_SYSTEMS.us = JSON.parse(JSON.stringify(UNIT_SYSTEMS.si));
      UNIT_SYSTEMS.us.LENGTH = {
        unit: UNITS.ft,
        prefix: PREFIXES.NONE['']
      };
      UNIT_SYSTEMS.us.MASS = {
        unit: UNITS.lbm,
        prefix: PREFIXES.NONE['']
      };
      UNIT_SYSTEMS.us.TEMPERATURE = {
        unit: UNITS.degF,
        prefix: PREFIXES.NONE['']
      };
      UNIT_SYSTEMS.us.FORCE = {
        unit: UNITS.lbf,
        prefix: PREFIXES.NONE['']
      };
      UNIT_SYSTEMS.us.ENERGY = {
        unit: UNITS.BTU,
        prefix: PREFIXES.BTU['']
      };
      UNIT_SYSTEMS.us.POWER = {
        unit: UNITS.hp,
        prefix: PREFIXES.NONE['']
      };
      UNIT_SYSTEMS.us.PRESSURE = {
        unit: UNITS.psi,
        prefix: PREFIXES.NONE['']
      };
    return UNIT_SYSTEMS
}

// export var PREFIXES_RAW = {
//     NONE: {
//         '': {
//             name: '',
//             value: 1e18,
//             scientific: true
//         }
//     },
//     SHORT: {
//         '': {
//             name: '',
//             value: 1e18,
//             scientific: true
//         },
//         da: {
//             name: 'da',
//             value: 1e19,
//             scientific: false
//         },
//         h: {
//             name: 'h',
//             value: 1e20,
//             scientific: false
//         },
//         k: {
//             name: 'k',
//             value: 1e21,
//             scientific: true
//         },
//         M: {
//             name: 'M',
//             value: 1e24,
//             scientific: true
//         },
//         G: {
//             name: 'G',
//             value: 1e27,
//             scientific: true
//         },
//         T: {
//             name: 'T',
//             value: 1e30,
//             scientific: true
//         },
//         P: {
//             name: 'P',
//             value: 1e33,
//             scientific: true
//         },
//         E: {
//             name: 'E',
//             value: 1e36,
//             scientific: true
//         },
//         Z: {
//             name: 'Z',
//             value: 1e39,
//             scientific: true
//         },
//         Y: {
//             name: 'Y',
//             value: 1e42,
//             scientific: true
//         },
//         d: {
//             name: 'd',
//             value: 1e17,
//             scientific: false
//         },
//         c: {
//             name: 'c',
//             value: 1e16,
//             scientific: false
//         },
//         m: {
//             name: 'm',
//             value: 1e15,
//             scientific: true
//         },
//         u: {
//             name: 'u',
//             value: 1e12,
//             scientific: true
//         },
//         n: {
//             name: 'n',
//             value: 1e9,
//             scientific: true
//         },
//         p: {
//             name: 'p',
//             value: 1e6,
//             scientific: true
//         },
//         f: {
//             name: 'f',
//             value: 1e3,
//             scientific: true
//         },
//         a: {
//             name: 'a',
//             value: 1,
//             scientific: true
//         },
//         z: {
//             name: 'z',
//             value: 1e-3,
//             scientific: true
//         },
//         y: {
//             name: 'y',
//             value: 1e-6,
//             scientific: true
//         }
//     },
//     LONG: {
//         '': {
//             name: '',
//             // value: 1,
//             value: 1e18,
//             scientific: true
//         },
//         deca: {
//             name: 'deca',
//             // value: 1e1,
//             value: 1e19,
//             scientific: false
//         },
//         hecto: {
//             name: 'hecto',
//             // value: 1e2,
//             value: 1e20,
//             scientific: false
//         },
//         kilo: {
//             name: 'kilo',
//             // value: 1e3,
//             value: 1e21,
//             scientific: true
//         },
//         mega: {
//             name: 'mega',
//             // value: 1e6,
//             value: 1e24,
//             scientific: true
//         },
//         giga: {
//             name: 'giga',
//             // value: 1e9,
//             value: 1e27,
//             scientific: true
//         },
//         tera: {
//             name: 'tera',
//             // value: 1e12,
//             value: 1e30,
//             scientific: true
//         },
//         peta: {
//             name: 'peta',
//             // value: 1e15,
//             value: 1e33,
//             scientific: true
//         },
//         exa: {
//             name: 'exa',
//             // value: 1e18,
//             value: 1e36,
//             scientific: true
//         },
//         zetta: {
//             name: 'zetta',
//             // value: 1e21,
//             value: 1e39,
//             scientific: true
//         },
//         yotta: {
//             name: 'yotta',
//             // value: 1e24,
//             value: 1e42,
//             scientific: true
//         },
//         deci: {
//             name: 'deci',
//             // value: 1e-1,
//             value: 1e17,
//             scientific: false
//         },
//         centi: {
//             name: 'centi',
//             // value: 1e-2,
//             value: 1e16,
//             scientific: false
//         },
//         milli: {
//             name: 'milli',
//             // value: 1e-3,
//             value: 1e15,
//             scientific: true
//         },
//         micro: {
//             name: 'micro',
//             // value: 1e-6,
//             value: 1e12,
//             scientific: true
//         },
//         nano: {
//             name: 'nano',
//             // value: 1e-9,
//             value: 1e9,
//             scientific: true
//         },
//         pico: {
//             name: 'pico',
//             // value: 1e-12,
//             value: 1e6,
//             scientific: true
//         },
//         femto: {
//             name: 'femto',
//             // value: 1e-15,
//             value: 1e3,
//             scientific: true
//         },
//         atto: {
//             name: 'atto',
//             // value: 1e-18,
//             value: 1,
//             scientific: true
//         },
//         zepto: {
//             name: 'zepto',
//             // value: 1e-21,
//             value: 1e-3,
//             scientific: true
//         },
//         yocto: {
//             name: 'yocto',
//             // value: 1e-24,
//             value: 1e-6,
//             scientific: true
//         }
//     },
//     BTU: {
//         '': {
//             name: '',
//             value: 1,
//             scientific: true
//         },
//         MM: {
//             name: 'MM',
//             value: 1e6,
//             scientific: true
//         }
//     },
//     SQUARED: {
//         '': {
//             name: '',
//             value: 1,
//             scientific: true
//         },
//         da: {
//             name: 'da',
//             value: 1e2,
//             scientific: false
//         },
//         h: {
//             name: 'h',
//             value: 1e4,
//             scientific: false
//         },
//         k: {
//             name: 'k',
//             value: 1e6,
//             scientific: true
//         },
//         M: {
//             name: 'M',
//             value: 1e12,
//             scientific: true
//         },
//         G: {
//             name: 'G',
//             value: 1e18,
//             scientific: true
//         },
//         T: {
//             name: 'T',
//             value: 1e24,
//             scientific: true
//         },
//         P: {
//             name: 'P',
//             value: 1e30,
//             scientific: true
//         },
//         E: {
//             name: 'E',
//             value: 1e36,
//             scientific: true
//         },
//         Z: {
//             name: 'Z',
//             value: 1e42,
//             scientific: true
//         },
//         Y: {
//             name: 'Y',
//             value: 1e48,
//             scientific: true
//         },
//         d: {
//             name: 'd',
//             value: 1e-2,
//             scientific: false
//         },
//         c: {
//             name: 'c',
//             value: 1e-4,
//             scientific: false
//         },
//         m: {
//             name: 'm',
//             value: 1e-6,
//             scientific: true
//         },
//         u: {
//             name: 'u',
//             value: 1e-12,
//             scientific: true
//         },
//         n: {
//             name: 'n',
//             value: 1e-18,
//             scientific: true
//         },
//         p: {
//             name: 'p',
//             value: 1e-24,
//             scientific: true
//         },
//         f: {
//             name: 'f',
//             value: 1e-30,
//             scientific: true
//         },
//         a: {
//             name: 'a',
//             value: 1e-36,
//             scientific: true
//         },
//         z: {
//             name: 'z',
//             value: 1e-42,
//             scientific: true
//         },
//         y: {
//             name: 'y',
//             value: 1e-48,
//             scientific: true
//         }
//     },
//     CUBIC: {
//         '': {
//             name: '',
//             value: 1,
//             scientific: true
//         },
//         da: {
//             name: 'da',
//             value: 1e3,
//             scientific: false
//         },
//         h: {
//             name: 'h',
//             value: 1e6,
//             scientific: false
//         },
//         k: {
//             name: 'k',
//             value: 1e9,
//             scientific: true
//         },
//         M: {
//             name: 'M',
//             value: 1e18,
//             scientific: true
//         },
//         G: {
//             name: 'G',
//             value: 1e27,
//             scientific: true
//         },
//         T: {
//             name: 'T',
//             value: 1e36,
//             scientific: true
//         },
//         P: {
//             name: 'P',
//             value: 1e45,
//             scientific: true
//         },
//         E: {
//             name: 'E',
//             value: 1e54,
//             scientific: true
//         },
//         Z: {
//             name: 'Z',
//             value: 1e63,
//             scientific: true
//         },
//         Y: {
//             name: 'Y',
//             value: 1e72,
//             scientific: true
//         },
//         d: {
//             name: 'd',
//             value: 1e-3,
//             scientific: false
//         },
//         c: {
//             name: 'c',
//             value: 1e-6,
//             scientific: false
//         },
//         m: {
//             name: 'm',
//             value: 1e-9,
//             scientific: true
//         },
//         u: {
//             name: 'u',
//             value: 1e-18,
//             scientific: true
//         },
//         n: {
//             name: 'n',
//             value: 1e-27,
//             scientific: true
//         },
//         p: {
//             name: 'p',
//             value: 1e-36,
//             scientific: true
//         },
//         f: {
//             name: 'f',
//             value: 1e-45,
//             scientific: true
//         },
//         a: {
//             name: 'a',
//             value: 1e-54,
//             scientific: true
//         },
//         z: {
//             name: 'z',
//             value: 1e-63,
//             scientific: true
//         },
//         y: {
//             name: 'y',
//             value: 1e-72,
//             scientific: true
//         }
//     },
//     BINARY_SHORT_SI: {
//         '': {
//             name: '',
//             value: 1,
//             scientific: true
//         },
//         k: {
//             name: 'k',
//             value: 1e3,
//             scientific: true
//         },
//         M: {
//             name: 'M',
//             value: 1e6,
//             scientific: true
//         },
//         G: {
//             name: 'G',
//             value: 1e9,
//             scientific: true
//         },
//         T: {
//             name: 'T',
//             value: 1e12,
//             scientific: true
//         },
//         P: {
//             name: 'P',
//             value: 1e15,
//             scientific: true
//         },
//         E: {
//             name: 'E',
//             value: 1e18,
//             scientific: true
//         },
//         Z: {
//             name: 'Z',
//             value: 1e21,
//             scientific: true
//         },
//         Y: {
//             name: 'Y',
//             value: 1e24,
//             scientific: true
//         }
//     },
//     BINARY_SHORT_IEC: {
//         '': {
//             name: '',
//             value: 1,
//             scientific: true
//         },
//         Ki: {
//             name: 'Ki',
//             value: 1024,
//             scientific: true
//         },
//         Mi: {
//             name: 'Mi',
//             value: Math.pow(1024, 2),
//             scientific: true
//         },
//         Gi: {
//             name: 'Gi',
//             value: Math.pow(1024, 3),
//             scientific: true
//         },
//         Ti: {
//             name: 'Ti',
//             value: Math.pow(1024, 4),
//             scientific: true
//         },
//         Pi: {
//             name: 'Pi',
//             value: Math.pow(1024, 5),
//             scientific: true
//         },
//         Ei: {
//             name: 'Ei',
//             value: Math.pow(1024, 6),
//             scientific: true
//         },
//         Zi: {
//             name: 'Zi',
//             value: Math.pow(1024, 7),
//             scientific: true
//         },
//         Yi: {
//             name: 'Yi',
//             value: Math.pow(1024, 8),
//             scientific: true
//         }
//     },
//     BINARY_LONG_SI: {
//         '': {
//             name: '',
//             value: 1,
//             scientific: true
//         },
//         kilo: {
//             name: 'kilo',
//             value: 1e3,
//             scientific: true
//         },
//         mega: {
//             name: 'mega',
//             value: 1e6,
//             scientific: true
//         },
//         giga: {
//             name: 'giga',
//             value: 1e9,
//             scientific: true
//         },
//         tera: {
//             name: 'tera',
//             value: 1e12,
//             scientific: true
//         },
//         peta: {
//             name: 'peta',
//             value: 1e15,
//             scientific: true
//         },
//         exa: {
//             name: 'exa',
//             value: 1e18,
//             scientific: true
//         },
//         zetta: {
//             name: 'zetta',
//             value: 1e21,
//             scientific: true
//         },
//         yotta: {
//             name: 'yotta',
//             value: 1e24,
//             scientific: true
//         }
//     },
//     BINARY_LONG_IEC: {
//         '': {
//             name: '',
//             value: 1,
//             scientific: true
//         },
//         kibi: {
//             name: 'kibi',
//             value: 1024,
//             scientific: true
//         },
//         mebi: {
//             name: 'mebi',
//             value: Math.pow(1024, 2),
//             scientific: true
//         },
//         gibi: {
//             name: 'gibi',
//             value: Math.pow(1024, 3),
//             scientific: true
//         },
//         tebi: {
//             name: 'tebi',
//             value: Math.pow(1024, 4),
//             scientific: true
//         },
//         pebi: {
//             name: 'pebi',
//             value: Math.pow(1024, 5),
//             scientific: true
//         },
//         exi: {
//             name: 'exi',
//             value: Math.pow(1024, 6),
//             scientific: true
//         },
//         zebi: {
//             name: 'zebi',
//             value: Math.pow(1024, 7),
//             scientific: true
//         },
//         yobi: {
//             name: 'yobi',
//             value: Math.pow(1024, 8),
//             scientific: true
//         }
//     },
// };


// export var UNITS_RAW = (Complex={I:1},BASE_UNITS=BASE_UNITS_RAW,PREFIXES=PREFIXES_RAW) => ({
//     // length
//     meter: {
//         name: 'meter',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     inch: {
//         name: 'inch',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0254,
//         offset: 0
//     },
//     foot: {
//         name: 'foot',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.3048,
//         offset: 0
//     },
//     yard: {
//         name: 'yard',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.9144,
//         offset: 0
//     },
//     mile: {
//         name: 'mile',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1609.344,
//         offset: 0
//     },
//     link: {
//         name: 'link',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.201168,
//         offset: 0
//     },
//     rod: {
//         name: 'rod',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 5.0292,
//         offset: 0
//     },
//     chain: {
//         name: 'chain',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 20.1168,
//         offset: 0
//     },
//     angstrom: {
//         name: 'angstrom',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1e-10,
//         offset: 0
//     },
//     m: {
//         name: 'm',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     in: {
//         name: 'in',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0254,
//         offset: 0
//     },
//     ft: {
//         name: 'ft',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.3048,
//         offset: 0
//     },
//     yd: {
//         name: 'yd',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.9144,
//         offset: 0
//     },
//     mi: {
//         name: 'mi',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1609.344,
//         offset: 0
//     },
//     li: {
//         name: 'li',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.201168,
//         offset: 0
//     },
//     rd: {
//         name: 'rd',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 5.0292,
//         offset: 0
//     },
//     ch: {
//         name: 'ch',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 20.1168,
//         offset: 0
//     },
//     mil: {
//         name: 'mil',
//         base: BASE_UNITS.LENGTH,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0000254,
//         offset: 0
//     },
//     // 1/1000 inch

//     // Surface
//     m2: {
//         name: 'm2',
//         base: BASE_UNITS.SURFACE,
//         prefixes: PREFIXES.SQUARED,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     sqin: {
//         name: 'sqin',
//         base: BASE_UNITS.SURFACE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.00064516,
//         offset: 0
//     },
//     // 645.16 mm2
//     sqft: {
//         name: 'sqft',
//         base: BASE_UNITS.SURFACE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.09290304,
//         offset: 0
//     },
//     // 0.09290304 m2
//     sqyd: {
//         name: 'sqyd',
//         base: BASE_UNITS.SURFACE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.83612736,
//         offset: 0
//     },
//     // 0.83612736 m2
//     sqmi: {
//         name: 'sqmi',
//         base: BASE_UNITS.SURFACE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 2589988.110336,
//         offset: 0
//     },
//     // 2.589988110336 km2
//     sqrd: {
//         name: 'sqrd',
//         base: BASE_UNITS.SURFACE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 25.29295,
//         offset: 0
//     },
//     // 25.29295 m2
//     sqch: {
//         name: 'sqch',
//         base: BASE_UNITS.SURFACE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 404.6873,
//         offset: 0
//     },
//     // 404.6873 m2
//     sqmil: {
//         name: 'sqmil',
//         base: BASE_UNITS.SURFACE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 6.4516e-10,
//         offset: 0
//     },
//     // 6.4516 * 10^-10 m2
//     acre: {
//         name: 'acre',
//         base: BASE_UNITS.SURFACE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 4046.86,
//         offset: 0
//     },
//     // 4046.86 m2
//     hectare: {
//         name: 'hectare',
//         base: BASE_UNITS.SURFACE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 10000,
//         offset: 0
//     },
//     // 10000 m2

//     // Volume
//     m3: {
//         name: 'm3',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.CUBIC,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     L: {
//         name: 'L',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 0.001,
//         offset: 0
//     },
//     // litre
//     l: {
//         name: 'l',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 0.001,
//         offset: 0
//     },
//     // litre
//     litre: {
//         name: 'litre',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 0.001,
//         offset: 0
//     },
//     cuin: {
//         name: 'cuin',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1.6387064e-5,
//         offset: 0
//     },
//     // 1.6387064e-5 m3
//     cuft: {
//         name: 'cuft',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.028316846592,
//         offset: 0
//     },
//     // 28.316 846 592 L
//     cuyd: {
//         name: 'cuyd',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.764554857984,
//         offset: 0
//     },
//     // 764.554 857 984 L
//     teaspoon: {
//         name: 'teaspoon',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.000005,
//         offset: 0
//     },
//     // 5 mL
//     tablespoon: {
//         name: 'tablespoon',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.000015,
//         offset: 0
//     },
//     // 15 mL
//     // {name: 'cup', base: BASE_UNITS.VOLUME, prefixes: PREFIXES.NONE, value: 1e12 * 0.000240, offset: 0}, // 240 mL  // not possible, we have already another cup
//     drop: {
//         name: 'drop',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 5e-8,
//         offset: 0
//     },
//     // 0.05 mL = 5e-8 m3
//     gtt: {
//         name: 'gtt',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 5e-8,
//         offset: 0
//     },
//     // 0.05 mL = 5e-8 m3

//     // Liquid volume
//     minim: {
//         name: 'minim',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.00000006161152,
//         offset: 0
//     },
//     // 0.06161152 mL
//     fluiddram: {
//         name: 'fluiddram',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0000036966911,
//         offset: 0
//     },
//     // 3.696691 mL
//     fluidounce: {
//         name: 'fluidounce',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.00002957353,
//         offset: 0
//     },
//     // 29.57353 mL
//     gill: {
//         name: 'gill',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0001182941,
//         offset: 0
//     },
//     // 118.2941 mL
//     cc: {
//         name: 'cc',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1e-6,
//         offset: 0
//     },
//     // 1e-6 L
//     cup: {
//         name: 'cup',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0002365882,
//         offset: 0
//     },
//     // 236.5882 mL
//     pint: {
//         name: 'pint',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0004731765,
//         offset: 0
//     },
//     // 473.1765 mL
//     quart: {
//         name: 'quart',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0009463529,
//         offset: 0
//     },
//     // 946.3529 mL
//     gallon: {
//         name: 'gallon',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.003785412,
//         offset: 0
//     },
//     // 3.785412 L
//     beerbarrel: {
//         name: 'beerbarrel',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.1173478,
//         offset: 0
//     },
//     // 117.3478 L
//     oilbarrel: {
//         name: 'oilbarrel',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.1589873,
//         offset: 0
//     },
//     // 158.9873 L
//     hogshead: {
//         name: 'hogshead',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.2384810,
//         offset: 0
//     },
//     // 238.4810 L

//     // {name: 'min', base: BASE_UNITS.VOLUME, prefixes: PREFIXES.NONE, value: 1e12 * 0.00000006161152, offset: 0}, // 0.06161152 mL // min is already in use as minute
//     fldr: {
//         name: 'fldr',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0000036966911,
//         offset: 0
//     },
//     // 3.696691 mL
//     floz: {
//         name: 'floz',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.00002957353,
//         offset: 0
//     },
//     // 29.57353 mL
//     gi: {
//         name: 'gi',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0001182941,
//         offset: 0
//     },
//     // 118.2941 mL
//     cp: {
//         name: 'cp',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0002365882,
//         offset: 0
//     },
//     // 236.5882 mL
//     pt: {
//         name: 'pt',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0004731765,
//         offset: 0
//     },
//     // 473.1765 mL
//     qt: {
//         name: 'qt',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.0009463529,
//         offset: 0
//     },
//     // 946.3529 mL
//     gal: {
//         name: 'gal',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.003785412,
//         offset: 0
//     },
//     // 3.785412 L
//     bbl: {
//         name: 'bbl',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.1173478,
//         offset: 0
//     },
//     // 117.3478 L
//     obl: {
//         name: 'obl',
//         base: BASE_UNITS.VOLUME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 0.1589873,
//         offset: 0
//     },
//     // 158.9873 L
//     // {name: 'hogshead', base: BASE_UNITS.VOLUME, prefixes: PREFIXES.NONE, value: 1e12 * 0.2384810, offset: 0}, // 238.4810 L // TODO: hh?

//     // Mass
//     ounce: {
//         name: 'ounce',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 28.349523125e-3,
//         offset: 0
//     },
//     poundmass: {
//         name: 'poundmass',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 453.59237e-3,
//         offset: 0
//     },
//     gram: {
//         name: 'gram',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 0.001,
//         offset: 0
//     },
//     g: {
//         name: 'g',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 0.001,
//         offset: 0
//     },
//     grain: {
//         name: 'grain',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 64.79891e-6,
//         offset: 0
//     },
//     dram: {
//         name: 'dram',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1.7718451953125e-3,
//         offset: 0
//     },
//     tonne: {
//         name: 'tonne',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1000,
//         offset: 0
//     },
//     ton: {
//         name: 'ton',
//         base: BASE_UNITS.MASS,
//         // prefixes: PREFIXES.SHORT,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 907.18474,
//         offset: 0
//     },
//     t: {
//         name: 't',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1000,
//         offset: 0
//     },
//     hundredweight: {
//         name: 'hundredweight',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 45.359237,
//         offset: 0
//     },
//     stick: {
//         name: 'stick',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 115e-3,
//         offset: 0
//     },
//     stone: {
//         name: 'stone',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 6.35029318,
//         offset: 0
//     },
//     gr: {
//         name: 'gr',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 64.79891e-6,
//         offset: 0
//     },
//     dr: {
//         name: 'dr',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1.7718451953125e-3,
//         offset: 0
//     },
//     oz: {
//         name: 'oz',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 28.349523125e-3,
//         offset: 0
//     },
//     lbm: {
//         name: 'lbm',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 453.59237e-3,
//         offset: 0
//     },
//     cwt: {
//         name: 'cwt',
//         base: BASE_UNITS.MASS,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 45.359237,
//         offset: 0
//     },
//     // Time
//     year: {
//         name: 'year',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 31557600,
//         // Julian year
//         offset: 0
//     },
//     month: {
//         name: 'month',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 2629800,
//         // 1/12th of Julian year
//         offset: 0
//     },
//     week: {
//         name: 'week',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 7 * 86400,
//         offset: 0
//     },
//     day: {
//         name: 'day',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 86400,
//         offset: 0
//     },
//     hour: {
//         name: 'hour',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 3600,
//         offset: 0
//     },
//     minute: {
//         name: 'minute',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 60,
//         offset: 0
//     },
//     second: {
//         name: 'second',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     decade: {
//         name: 'decade',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 315576000,
//         // Julian decade
//         offset: 0
//     },
//     century: {
//         name: 'century',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 3155760000,
//         // Julian century
//         offset: 0
//     },
//     millennium: {
//         name: 'millennium',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 31557600000,
//         // Julian millennium
//         offset: 0
//     },
//     h: {
//         name: 'h',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 3600,
//         offset: 0
//     },
//     min: {
//         name: 'min',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 60,
//         offset: 0
//     },
//     s: {
//         name: 's',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     sec: {
//         name: 'sec',
//         base: BASE_UNITS.TIME,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // Frequency
//     hertz: {
//         name: 'hertz',
//         base: BASE_UNITS.FREQUENCY,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0,
//         reciprocal: true
//     },
//     Hz: {
//         name: 'Hz',
//         base: BASE_UNITS.FREQUENCY,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0,
//         reciprocal: true
//     },
//     // Angle
//     rad: {
//         name: 'rad',
//         base: BASE_UNITS.ANGLE,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     radian: {
//         name: 'radian',
//         base: BASE_UNITS.ANGLE,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // deg = rad / (2*pi) * 360 = rad / 0.017453292519943295769236907684888
//     deg: {
//         name: 'deg',
//         base: BASE_UNITS.ANGLE,
//         prefixes: PREFIXES.SHORT,
//         value: null,
//         // will be filled in by calculateAngleValues()
//         offset: 0
//     },
//     degree: {
//         name: 'degree',
//         base: BASE_UNITS.ANGLE,
//         prefixes: PREFIXES.LONG,
//         value: null,
//         // will be filled in by calculateAngleValues()
//         offset: 0
//     },
//     // grad = rad / (2*pi) * 400  = rad / 0.015707963267948966192313216916399
//     grad: {
//         name: 'grad',
//         base: BASE_UNITS.ANGLE,
//         prefixes: PREFIXES.SHORT,
//         value: null,
//         // will be filled in by calculateAngleValues()
//         offset: 0
//     },
//     gradian: {
//         name: 'gradian',
//         base: BASE_UNITS.ANGLE,
//         prefixes: PREFIXES.LONG,
//         value: null,
//         // will be filled in by calculateAngleValues()
//         offset: 0
//     },
//     // cycle = rad / (2*pi) = rad / 6.2831853071795864769252867665793
//     cycle: {
//         name: 'cycle',
//         base: BASE_UNITS.ANGLE,
//         prefixes: PREFIXES.NONE,
//         value: null,
//         // will be filled in by calculateAngleValues()
//         offset: 0
//     },
//     // arcsec = rad / (3600 * (360 / 2 * pi)) = rad / 0.0000048481368110953599358991410235795
//     arcsec: {
//         name: 'arcsec',
//         base: BASE_UNITS.ANGLE,
//         prefixes: PREFIXES.NONE,
//         value: null,
//         // will be filled in by calculateAngleValues()
//         offset: 0
//     },
//     // arcmin = rad / (60 * (360 / 2 * pi)) = rad / 0.00029088820866572159615394846141477
//     arcmin: {
//         name: 'arcmin',
//         base: BASE_UNITS.ANGLE,
//         prefixes: PREFIXES.NONE,
//         value: null,
//         // will be filled in by calculateAngleValues()
//         offset: 0
//     },
//     // Electric current
//     ampere: {
//         name: 'ampere',
//         base: BASE_UNITS.CURRENT,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     A: {
//         name: 'A',
//         base: BASE_UNITS.CURRENT,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // Temperature
//     // K(C) = °C + 273.15
//     // K(F) = (°F + 459.67) / 1.8
//     // K(R) = °R / 1.8
//     kelvin: {
//         name: 'kelvin',
//         base: BASE_UNITS.TEMPERATURE,
//         // prefixes: PREFIXES.LONG,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     celsius: {
//         name: 'celsius',
//         base: BASE_UNITS.TEMPERATURE,
//         // prefixes: PREFIXES.LONG,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1,
//         // offset: 273.15
//         offset: 273.15e18
//     },
//     fahrenheit: {
//         name: 'fahrenheit',
//         base: BASE_UNITS.TEMPERATURE,
//         // prefixes: PREFIXES.LONG,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1 / 1.8,
//         // offset: 459.67
//         offset: 459.67e18
//     },
//     rankine: {
//         name: 'rankine',
//         base: BASE_UNITS.TEMPERATURE,
//         // prefixes: PREFIXES.LONG,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1 / 1.8,
//         offset: 0
//     },
//     K: {
//         name: 'K',
//         base: BASE_UNITS.TEMPERATURE,
//         // prefixes: PREFIXES.SHORT,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     degC: {
//         name: 'degC',
//         base: BASE_UNITS.TEMPERATURE,
//         // prefixes: PREFIXES.SHORT,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1,
//         // offset: 273.15
//         offset: 273.15e18
//     },
//     degF: {
//         name: 'degF',
//         base: BASE_UNITS.TEMPERATURE,
//         // prefixes: PREFIXES.SHORT,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1 / 1.8,
//         // offset: 459.67
//         offset: 459.67e18
//     },
//     degR: {
//         name: 'degR',
//         base: BASE_UNITS.TEMPERATURE,
//         // prefixes: PREFIXES.SHORT,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1 / 1.8,
//         offset: 0
//     },
//     // amount of substance
//     mole: {
//         name: 'mole',
//         base: BASE_UNITS.AMOUNT_OF_SUBSTANCE,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     mol: {
//         name: 'mol',
//         base: BASE_UNITS.AMOUNT_OF_SUBSTANCE,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // luminous intensity
//     candela: {
//         name: 'candela',
//         base: BASE_UNITS.LUMINOUS_INTENSITY,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     cd: {
//         name: 'cd',
//         base: BASE_UNITS.LUMINOUS_INTENSITY,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // TODO: units STERADIAN
//     // {name: 'sr', base: BASE_UNITS.STERADIAN, prefixes: PREFIXES.NONE, value: 1e12 * 1, offset: 0},
//     // {name: 'steradian', base: BASE_UNITS.STERADIAN, prefixes: PREFIXES.NONE, value: 1e12 * 1, offset: 0},

//     // Force
//     newton: {
//         name: 'newton',
//         base: BASE_UNITS.FORCE,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     N: {
//         name: 'N',
//         base: BASE_UNITS.FORCE,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     dyne: {
//         name: 'dyne',
//         base: BASE_UNITS.FORCE,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 0.00001,
//         offset: 0
//     },
//     dyn: {
//         name: 'dyn',
//         base: BASE_UNITS.FORCE,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 0.00001,
//         offset: 0
//     },
//     poundforce: {
//         name: 'poundforce',
//         base: BASE_UNITS.FORCE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 4.4482216152605,
//         offset: 0
//     },
//     lbf: {
//         name: 'lbf',
//         base: BASE_UNITS.FORCE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 4.4482216152605,
//         offset: 0
//     },
//     kilogramforce: {
//         name: 'kilogramforce',
//         base: BASE_UNITS.FORCE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 9.80665,
//         offset: 0
//     },
//     kip: {
//         name: 'kip',
//         base: BASE_UNITS.FORCE,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 4448.2216,
//         offset: 0
//     },
//     // Energy
//     joule: {
//         name: 'joule',
//         base: BASE_UNITS.ENERGY,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     J: {
//         name: 'J',
//         base: BASE_UNITS.ENERGY,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     erg: {
//         name: 'erg',
//         base: BASE_UNITS.ENERGY,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 1e-7,
//         offset: 0
//     },
//     Wh: {
//         name: 'Wh',
//         base: BASE_UNITS.ENERGY,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 3600,
//         offset: 0
//     },
//     BTU: {
//         name: 'BTU',
//         base: BASE_UNITS.ENERGY,
//         prefixes: PREFIXES.BTU,
//         value: 1e12 * 1055.05585262,
//         offset: 0
//     },
//     electronvolt: {
//         name: 'electronvolt',
//         base: BASE_UNITS.ENERGY,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1.602176565e-19,
//         offset: 0
//     },
//     eV: {
//         name: 'eV',
//         base: BASE_UNITS.ENERGY,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1.602176565e-19,
//         offset: 0
//     },
//     // Power
//     hp: {
//         name: 'hp',
//         base: BASE_UNITS.POWER,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 745.6998715386,
//         offset: 0
//     },
//     watt: {
//         name: 'watt',
//         base: BASE_UNITS.POWER,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     W: {
//         name: 'W',
//         base: BASE_UNITS.POWER,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // Electrical power units
//     VAR: {
//         name: 'VAR',
//         base: BASE_UNITS.POWER,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * Complex.I,
//         offset: 0
//     },
//     VA: {
//         name: 'VA',
//         base: BASE_UNITS.POWER,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // Pressure
//     Pa: {
//         name: 'Pa',
//         base: BASE_UNITS.PRESSURE,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     psi: {
//         name: 'psi',
//         base: BASE_UNITS.PRESSURE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 6894.75729276459,
//         offset: 0
//     },
//     atm: {
//         name: 'atm',
//         base: BASE_UNITS.PRESSURE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 101325,
//         offset: 0
//     },
//     bar: {
//         name: 'bar',
//         base: BASE_UNITS.PRESSURE,
//         prefixes: PREFIXES.SHORTLONG,
//         value: 1e12 * 100000,
//         offset: 0
//     },
//     torr: {
//         name: 'torr',
//         base: BASE_UNITS.PRESSURE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 133.322,
//         offset: 0
//     },
//     mmHg: {
//         name: 'mmHg',
//         base: BASE_UNITS.PRESSURE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 133.322,
//         offset: 0
//     },
//     mmH2O: {
//         name: 'mmH2O',
//         base: BASE_UNITS.PRESSURE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 9.80665,
//         offset: 0
//     },
//     cmH2O: {
//         name: 'cmH2O',
//         base: BASE_UNITS.PRESSURE,
//         prefixes: PREFIXES.NONE,
//         value: 1e12 * 98.0665,
//         offset: 0
//     },
//     // Electric charge
//     coulomb: {
//         name: 'coulomb',
//         base: BASE_UNITS.ELECTRIC_CHARGE,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     C: {
//         name: 'C',
//         base: BASE_UNITS.ELECTRIC_CHARGE,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // Electric capacitance
//     farad: {
//         name: 'farad',
//         base: BASE_UNITS.ELECTRIC_CAPACITANCE,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     F: {
//         name: 'F',
//         base: BASE_UNITS.ELECTRIC_CAPACITANCE,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // Electric potential
//     volt: {
//         name: 'volt',
//         base: BASE_UNITS.ELECTRIC_POTENTIAL,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     V: {
//         name: 'V',
//         base: BASE_UNITS.ELECTRIC_POTENTIAL,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // Electric resistance
//     ohm: {
//         name: 'ohm',
//         base: BASE_UNITS.ELECTRIC_RESISTANCE,
//         prefixes: PREFIXES.LONG,
//         // Both Mohm and megaohm are acceptable
//         value: 1e12 * 1,
//         offset: 0
//     },
//     /*
//      * Unicode breaks in browsers if charset is not specified
//     Ω: {
//       name: 'Ω',
//       base: BASE_UNITS.ELECTRIC_RESISTANCE,
//       prefixes: PREFIXES.SHORT,
//       value: 1e12 * 1,
//       offset: 0
//     },
//     */
//     // Electric inductance
//     henry: {
//         name: 'henry',
//         base: BASE_UNITS.ELECTRIC_INDUCTANCE,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     H: {
//         name: 'H',
//         base: BASE_UNITS.ELECTRIC_INDUCTANCE,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // Electric conductance
//     siemens: {
//         name: 'siemens',
//         base: BASE_UNITS.ELECTRIC_CONDUCTANCE,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     S: {
//         name: 'S',
//         base: BASE_UNITS.ELECTRIC_CONDUCTANCE,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // Magnetic flux
//     weber: {
//         name: 'weber',
//         base: BASE_UNITS.MAGNETIC_FLUX,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     Wb: {
//         name: 'Wb',
//         base: BASE_UNITS.MAGNETIC_FLUX,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // Magnetic flux density
//     tesla: {
//         name: 'tesla',
//         base: BASE_UNITS.MAGNETIC_FLUX_DENSITY,
//         prefixes: PREFIXES.LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     T: {
//         name: 'T',
//         base: BASE_UNITS.MAGNETIC_FLUX_DENSITY,
//         prefixes: PREFIXES.SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     // Binary
//     bits: {
//         name: 'bits',
//         base: BASE_UNITS.BIT,
//         prefixes: PREFIXES.BINARY_LONG,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     b: {
//         name: 'b',
//         base: BASE_UNITS.BIT,
//         prefixes: PREFIXES.BINARY_SHORT,
//         value: 1e12 * 1,
//         offset: 0
//     },
//     bytes: {
//         name: 'bytes',
//         base: BASE_UNITS.BIT,
//         prefixes: PREFIXES.BINARY_LONG,
//         value: 1e12 * 8,
//         offset: 0
//     },
//     B: {
//         name: 'B',
//         base: BASE_UNITS.BIT,
//         prefixes: PREFIXES.BINARY_SHORT,
//         value: 1e12 * 8,
//         offset: 0
//     },
// });
