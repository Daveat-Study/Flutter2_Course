import 'package:abstraction/backend/api.dart';
import 'package:abstraction/models/api_models.dart';

class FakeApi implements Api {

  @override
  Future<List<Comment>>? getCommentsForPost(int postId) {

    return null;
  }

  @override
  Future<List<Post>>? getPostsForUser(int userId){

    return null;
  }
  
  @override
  Future<User>? getUser(int userId){

    return null;
  }

  @override
  Future<LoginResponse>? login({String? userName, String? password}){

    return null;
  }
}