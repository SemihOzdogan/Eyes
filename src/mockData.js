const categories = [
    {
        value: 0,
        name: "Yakınımdakiler",
        icon: require("./img/location.png")
    },
    {
        value: 1,
        name: "Kahve",
        icon: require("./img/coffee.png")
    },
    {
        value: 2,
        name: "Yemek",
        icon: require("./img/eat.png")
    },
    {
        value: 3,
        name: "İçecek",
        icon: require("./img/location.png")
    },
    {
        value: 4,
        name: "Yakınımdakiler",
        icon: require("./img/location.png")
    },
    {
        value: 5,
        name: "Kahve",
        icon: require("./img/location.png")
    },
    {
        value: 6,
        name: "Yemek",
        icon: require("./img/location.png")
    },
    {
        value: 7,
        name: "İçecek",
        icon: require("./img/location.png")
    }
]

export const menu = [
    {
        index: 0,
        name: "Tümü",
    },
    {
        index: 1,
        name: "Kültürel",
    },
    {
        index: 2,
        name: "Popular",
    }
]

export const markets = [
    {
        index: 0,
        name: "HappyMoons",
        image: require("./img/market.png"),
        location: "750m",
        avatars: [
            { index: 0, avatar: require("./img/avatar.png") },
            { index: 1, avatar: require("./img/avatar2.png") },
            { index: 2, avatar: require("./img/avatar3.png") }
        ],
        city: "Beşiktaş",
        line: require("./img/line.png")
    },
    {
        index: 1,
        name: "Big Chefs",
        image: require("./img/chef.png"),
        location: "100m",
        avatars: [
            { index: 0, avatar: require("./img/avatar.png") },
        ],
        city: "Esenler",
        line: require("./img/line2.png")

    },
    {
        index: 2,
        name: "Kahve Dünyası",
        image: require("./img/market.png"),
        location: "450m",
        avatars: [
            { index: 0, avatar: require("./img/avatar.png") },
            { index: 1, avatar: require("./img/avatar2.png") },
        ],
        city: "Bağcılar",
        line: require("./img/line2.png")
    }
]
export default categories;