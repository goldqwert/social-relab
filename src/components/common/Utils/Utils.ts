export const changeFollowUnfollow = (items: Array<any>, id: number, status: boolean) => {
    return items.map(u => {
        if (u.id === id) {
            return { ...u, followed: status }
        }
        return u;
    })
}
