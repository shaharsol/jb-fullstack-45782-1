export default useService() {
    // will access the content using useContext to get the jwt
    // will instansiate a Service instance (ProfileService, FeedService, FollowingService) with that jwt
    // will return a Service instance that already contains a jwt => contains axiosInstance => any call to the server goes out with the Authorization header
}