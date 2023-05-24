const getDate = (publishedAt: string): string => {
    const date: Date = new Date(publishedAt);

    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    } as const;

    return date.toLocaleDateString('en-US', options);
};

export default getDate;