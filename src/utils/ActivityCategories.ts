export type Category = {
    name: string
    infos?: string
    scores: { 
        points: number
        info: string
    }[]
}

export const categories: Category[] = [
    {
        name: "Affrontement",
        scores:
            [
                {
                    points: 3,
                    info: "Victoire",
                },
                {
                    points: 2,
                    info: "Nul",
                },
                {
                    points: 1,
                    info: "Défaite",
                },

            ],
    },

    {
        name: "Défi d'équipe",
        scores:
            [
                {
                    points: 4,
                    info: "Défi et équipe ok",
                },
                {
                    points: 2,
                    info: "Défi ok",
                },
                {
                    points: 2,
                    info: "Equipe ok",
                },
                {
                    points: 0,
                    info: "Refus de faire",
                },

            ],
    },

    {
        name: "Art",
        scores:
            [
                {
                    points: 3,
                    info: "Ok",
                },
                {
                    points: 1,
                    info: "Non",
                },
            ],
    },
    {
        name: "Insta",
        infos: "1 point par story (5 max)",
        scores:
            [
                {
                    points: 5,
                    info: "5 stories",
                },
                {
                    points: 4,
                    info: "4 stories",
                },
                {
                    points: 3,
                    info: "3 stories",
                },
                {
                    points: 2,
                    info: "2 stories",
                },
                {
                    points: 1,
                    info: "1 story",
                },
                {
                    points: 0,
                    info: "Aucune story",
                },
            ],
    },
]
