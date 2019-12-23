export const changeFollowUnfollow = (items, id, status) => {
    return items.map(u => {
        if (u.id === id) {
            return { ...u, followed: status }
        }
        return u;
    })
}
