export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
}

export interface MovieCastCredit extends Movie {
    character: string;
}

export interface CastMember {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

export interface CrewMember {
    id: number;
    name: string;
    job: string;
    department: string;
}

export interface Credits {
    cast: CastMember[];
    crew: CrewMember[];
}
