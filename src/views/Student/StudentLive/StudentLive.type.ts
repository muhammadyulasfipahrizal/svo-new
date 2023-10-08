export interface StudentLive {
    id: number;
    name: string;
    url: string;
    details: {
        title: string;
        instructor: string;
    };
}

export interface CommentLive {
    id: number;
    image: string;
    comment: string;
}