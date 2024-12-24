module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Use `content` instead of `purge`
    theme: {
        extend: {
            colors: {
                customBlue: "#1E3A8A", // A custom blue color
                customGreen: "#10B981", // A custom green color
                customYellow: "#F59E0B", // A custom yellow color
            },
        },
    },
    plugins: [],
};
