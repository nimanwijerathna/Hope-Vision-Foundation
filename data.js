const ADMIN_CONTACT_DATA = [
    // --- Kadawatha ---
    {
        area: 'Kadawatha - කඩවත',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Sewwandi Mayadunna', phone: '+94 71 362 8859' },
            { name: 'Gayashi Hasinika', phone: '+94 76 134 3005' },
            { name: 'Deepadi Gunawardhane', phone: '+94 75 829 3721' }
        ]
    },

    // --- Galle --- removed

    // --- Homagama ---
    {
        area: 'Homagama - හෝමාගම',
        status: 'pending',
        location: 'pending',
        contacts: [
            { name: 'Unknown', phone: '+94 72 403 6164' }

        ]
    },

    // --- Gampaha ---
    {
        area: 'Gampaha - ගම්පහ',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Poorna', phone: '+94 75 737 4508' },
            { name: 'Vibodha', phone: '+94 74 017 9049' },
            { name: 'Prathibha Indumini', phone: '+94 71 250 7238' },
            { name: 'Unknown', phone: '+94 75 883 0172' }
        ]
    },

    // --- Wattala ---
    {
        area: 'Wattala - වත්තල',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Angela', phone: '+94 77 279 8149' },
            { name: 'Hoshani Peiris', phone: '+94 76 647 4439' }
        ]
    },

    // --- Matara ---
    {
        area: 'Matara - මාතර',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Sasindu Prabhashwara', phone: '+94 71 654 3532' },
            { name: 'Chamidu Laksitha', phone: '+94 71 654 3532' }
        ]
    },

    // --- Negombo ---
    {
        area: 'Negombo - මීගමුව',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Nethmi Silva', phone: '+94 76 983 9613' }
        ]
    },

    // --- Kiribathgoda ---
    {
        area: 'Kiribathgoda - කිරිබත්ගොඩ',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Angela', phone: '+94 77 279 8149' },
            { name: 'Hoshani Peiris', phone: '+94 76 647 4439' }
        ]
    },

    // --- Ragama ---
    {
        area: 'Ragama - රාගම',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Angela', phone: '+94 77 279 8149' }
        ]
    },

    // --- Mathugama ---
    {
        area: 'Mathugama - මතුගම',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Buddhi Amalka', phone: '+94 77 644 1640' }
        ]
    },

    // --- Kandy ---
    {
        area: 'Kandy - නුවර',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Damith', phone: '+94 71 017 0138' }
        ]
    },

    // --- Kurunegala ---
    {
        area: 'Kurunegala - කුරුණෑගල',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Damith', phone: '+94 71 017 0138' },
            { name: 'Unkown', phone: '+94 72 929 7222' }
        ]
    },

    // --- Minuwangoda ---
    {
        area: 'Minuwangoda - මිනුවන්ගොඩ',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Gihan Kanishka', phone: '+94 71 235 3890' }
        ]
    },

    // --- Udugampola ---
    {
        area: 'Udugampola - උඩුගම්පොළ',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Gihan Kanishka', phone: '+94 71 235 3890' }
        ]
    },

    // --- Kegalla ---
    {
        area: 'Kegalle - කෑගල්ල',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Thilaksha Dilrukshi', phone: '+94 71 254 0196' }
        ]
    },

    // --- Panadura ---
    {
        area: 'Panadura - පානදුර',
        status: 'confirmed',
        location: 'https://maps.google.com/maps?q=Crest%2BComputer%2BAcademy%2B186%2BKiriberiya%2BRd%2C%2BOluvila%2C%2B002500%2C%2BWestern%2C%2BLK&sll=6.71319554,79.92956755',
        contacts: [
            { name: 'Senithu Piumajith', phone: '+94 76 811 0262' }
        ]
    },

    // --- Kelaniya ---
    {
        area: 'Kelaniya - කැලණිය',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Dilon Perera', phone: '+94 76 983 9613' }
        ]
    },

    // --- Nittambuwa ---
    {
        area: 'Nittambuwa - නිට්ටඹුව',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Vidara Ovindi', phone: '+94 76 400 9508' }
        ]
    },

    // --- Veyangoda ---
    {
        area: 'Veyangoda - වේයන්ගොඩ',
        status: 'pending',
        location: 'pending',
        contacts: [
            { name: 'Unknown', phone: '+94 76 549 4808' }
        ]
    },

    // --- Anuradhapura ---
    {
        area: 'Anuradhapura - අනුරාධපුරය',
        status: 'pending',
        location: 'pending',
        contacts: [
            { name: 'Unknown', phone: '+94 76 805 9316' },
            { name: 'Unknown', phone: '+94 77 237 6085' },
            { name: 'Unknown', phone: '+94 76 650 6621' }
        ]
    },

    // --- Halawatha ---
    {
        area: 'Halawatha - හලාවත',
        status: 'pending',
        location: 'pending',
        contacts: [
            { name: 'Unknown', phone: '+94 70 186 4043' }
        ]
    },

    // --- Hambanthota ---
    {
        area: 'Hambanthota - හම්බන්තොට',
        status: 'pending',
        location: 'pending',
        contacts: [
            { name: 'Unknown', phone: '+94 76 750 4483' }
        ]
    },

    // --- Maharagama ---
    {
        area: 'Maharagama - මහරගම',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Mihansa Sadewmi', phone: '+94 74 000 4794' }
        ]
    },
    
    // --- Kirindiwela ---
    {
        area: 'Kirindiwela - කිරිඳිවැල',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Dulneth Nimsara', phone: '+94 76 285 6553' }
        ]
    },
    
    // --- Borella ---
    {
        area: 'Borella - බොරැල්ල',
        status: 'confirmed',
        location: 'pending',
        contacts: [
            { name: 'Angela', phone: '+94 77 279 8149' },
        ]
    },

    // --- GENERAL CONTACT ---
    {
        area: 'General Help',
        status: 'confirmed',
        location: 'whatsapp',
        mailto: 'foundationhopevision@gmail.com',
    }
];