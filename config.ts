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
        "https://cdn.discordapp.com/attachments/1415236213853651048/1467490260102545488/icons8-discord-staff-badge-48.png?ex=6980924e&is=697f40ce&hm=122deda2d993e74a8a1ddb386e35dd1f726d58f74301ee05c5cb9808c5b2dcd6&",
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
            iconUrl: "https://img.icons8.com/?size=100&id=114902&format=png&color=000000", 
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
