export const config = {
    // Basic Information
    description: "",
    discordId: "1274893884555788381", // Required for fetching profile data
    themeColor: "#9966ff", // Main accent color (Hex code)
    spotify: true, // Toggle Spotify integration features

    // UI Customization
    ui: {
        mainCard: {
            opacity: 20, // Background opacity (0-100)
            border: {
                show: false, // Toggle border
                width: 1, // Border width in pixels
                color: "#66ff66" // Border color
            }
        },
        activityCard: {
            opacity: 25, // Background opacity (0-100)
            border: {
                show: true,
                width: 2,
                color: "#ffffff"
            }
        }
    },

    // Badges Section
    // Displayed below your name. Use direct image URLs.
    customBadges: [
        "https://cdn.discordapp.com/attachments/1415236213853651048/1467490259771068457/icons8-discord-bug-hunter-badge-48.png?ex=6980924e&is=697f40ce&hm=0c039f30a745b601f4509f4c0931e6954930936083145aba0f92857bd28833d7&",
        "https://cdn.discordapp.com/attachments/1420000951158177814/1467513884611969197/icons8-discord-active-developer-badge-48.png?ex=6980a84f&is=697f56cf&hm=f59a52afc9634c174a8f5cf5414a59fd717a12eb6e03289dc47b37acc3f474b8&65996acc4a2b175de1cd38ab771f30d5574608499085bfd&",
        "https://cdn.discordapp.com/attachments/1420000951158177814/1467513884339343401/icons8-dsicord-hypesquad-brilliance-house-badge-48.png?ex=6980a84f&is=697f56cf&hm=2db223352845f289865996acc4a2b175de1cd38ab771f30d5574608499085bfd&",
        "https://cdn.discordapp.com/attachments/1420000951158177814/1467514271075406040/99057-orbs-discord.png?ex=6980a8ab&is=697f572b&hm=24f4e1dc20ab4a045e1ce20fe8896a1e55aef7237c7112fa6168e59e3937e7b2&",
        "https://cdn.discordapp.com/attachments/1420000951158177814/1467514429620097024/66366-completed-a-quest.png?ex=6980a8d1&is=697f5751&hm=811b11f9e71fa952c4baca34a32dec35333729daa02509aff70b4047e0fb2478&",
    ],
    badgeStyle: {
        size: 24, // Size in pixels
        opacity: 100, // Opacity (0-100)
        gap: 8, // Space between badges in pixels
    },

    // Social Links
    // Displayed at the bottom of the card.
    socials: [
        { 
            label: "discord", 
            iconUrl: "https://icons8.comundefined", 
            href: "https://discord.gg/hDaU6UrFyg" 
        },
        // Add more links as needed
    ],

    // Background Settings
    background: {
        type: "video", // Options: 'video' or 'image'
        url: "https://pin.it/6B8ociwGK", // Direct link to image or video
    },
};
