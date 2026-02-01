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
        "https://icons8.com/icon/0vJNjSJWpHy7/discord-active-developer-badge",
        "https://icons8.com/icon/Ln7pCdhGRrN9/dsicord-hypesquad-brilliance-house-badge",
        "https://emoji.gg/emoji/99057-orbs-discord",
        "https://emoji.gg/emoji/66366-completed-a-quest",
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
