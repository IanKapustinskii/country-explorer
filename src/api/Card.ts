import { useQuery } from '@tanstack/react-query';
import { z } from 'zod'
import { queryClient } from './QueryClient';

export const CardSchema = z.object({
    name: z.object({
        common: z.string(),
        official: z.string(),
        nativeName: z.record(
            z.string(),
            z.object({
                official: z.string(),
                common: z.string(),
            })
        ).optional(),
    }),

    tld: z.array(z.string()).optional(),
    cca2: z.string(),
    ccn3: z.string().optional(),
    cioc: z.string().optional(),
    independent: z.boolean().optional(),
    status: z.string(),
    unMember: z.boolean(),

    currencies: z.record(
        z.string(),
        z.object({
            symbol: z.string().optional(),
            name: z.string(),
        })
    ).optional(),

    idd: z.object({
        root: z.string().nullable().optional(),
        suffixes: z.array(z.string()).optional(),
    }).optional(),

    capital: z.array(z.string()).optional(),
    altSpellings: z.array(z.string()).optional(),
    region: z.string(),
    subregion: z.string().optional(),

    languages: z.record(z.string(), z.string()).optional(),

    latlng: z.array(z.number()).min(2), 

    landlocked: z.boolean().optional(),
    borders: z.array(z.string()).optional(),
    area: z.number(),

    demonyms: z.object({
        eng: z.object({
            f: z.string(),
            m: z.string(),
        }).optional(),
        fra: z.object({
            f: z.string(),
            m: z.string(),
        }).optional(),
    }).optional(),

    cca3: z.string(),

    translations: z.record(
        z.string(),
        z.object({
            official: z.string(),
            common: z.string(),
        })
    ).optional(),

    flag: z.string().optional(),

    maps: z.object({
        googleMaps: z.string(),
        openStreetMaps: z.string(),
    }),

    population: z.number(),
    gini: z.record(z.string(), z.number()).optional(),

    fifa: z.string().optional(),

    car: z.object({
        signs: z.array(z.string()).optional(),
        side: z.string(),
    }).optional(),

    timezones: z.array(z.string()),
    continents: z.array(z.string()),

    flags: z.object({
        png: z.string().optional(),
        svg: z.string().optional(),
        alt: z.string().optional(),
    }),

    coatOfArms: z.object({
        png: z.string().optional(),
        svg: z.string().optional(),
    }).optional(),

    startOfWeek: z.string().optional(),

    capitalInfo: z.object({
        latlng: z.array(z.number()).optional(),
    }).optional(),

    postalCode: z.object({
        format: z.string().optional().nullable(),
        regex: z.string().optional().nullable(),
    }).optional(),
}); // one country

export type Card = z.infer<typeof CardSchema>;
export type TemporaryCard = Card & { isLoading: true };

export const CardListSchema = z.array(CardSchema);

export type CardList = z.infer<typeof CardListSchema>; // answer of server

export function fetchCardList(url: string): Promise<CardList> {
    return fetch(url)
        .then((response) => response.json())
         .then((data) => CardListSchema.parse(data));
};

interface RequestState {
    status: 'idle' | 'pending' | 'success' | 'error';
    data?: CardList;
    error?: unknown;
}

export function useCardList(
    url: string,
) {

    const query = useQuery({
        queryKey: ['contries', url],
        queryFn: async () => {
            const data = await fetchCardList(url);
            return data
        },
    }, queryClient);



    const state: RequestState = {
        status: query.isLoading
            ? 'pending'
            : query.isError
                ? 'error'
                : query.isSuccess
                    ? 'success'
                    : 'idle',
        data: query.data,
        error: query.error,
    };

    const refetch = () => query.refetch();

    return {
        state,
        refetch,
    };

}



