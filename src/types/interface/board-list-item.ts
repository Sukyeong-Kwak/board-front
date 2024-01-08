export default interface BoardListItme {
    boardNumber : number,
    title: string,
    boardTitleImage: string | null,
    favoriteCount: number,
    commentCount: number,
    viewCount: number,
    writeDatetime: string,
    writerNickname: string,
    writerProfileImage: string | null;
}