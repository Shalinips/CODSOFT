import math
users = {
    "User1": {"Inception": 1, "Titanic": 0, "Matrix": 1, "Notebook": 0},
    "User2": {"Inception": 1, "Titanic": 1, "Matrix": 0, "Notebook": 1},
    "User3": {"Inception": 0, "Titanic": 1, "Matrix": 1, "Notebook": 0}
}
def calculate_similarity(userA, userB):
    moviesA = users[userA]
    moviesB = users[userB]
    common_movies = []
    for movie in moviesA:
        if movie in moviesB:
            common_movies.append(movie)
    dot_product = 0
    lengthA = 0
    lengthB = 0
    for m in common_movies:
        dot_product += moviesA[m] * moviesB[m]
        lengthA += moviesA[m] ** 2
        lengthB += moviesB[m] ** 2
    if lengthA == 0 or lengthB == 0:
        return 0  
    similarity_value = dot_product / (math.sqrt(lengthA) * math.sqrt(lengthB))
    return similarity_value
def recommend_movies(target_user):
    movies_liked = {}   
    for other_user in users:
        if other_user == target_user:
            continue
        sim_value = calculate_similarity(target_user, other_user)
        for movie in users[other_user]:
            if users[target_user][movie] == 0 and users[other_user][movie] == 1:
                if movie not in movies_liked:
                    movies_liked[movie] = 0
                movies_liked[movie] += sim_value
    final_list = sorted(movies_liked.items(), key=lambda x: x[1], reverse=True)
    return final_list
if __name__ == "__main__":
    target = "User1"
    print("Recommendations for", target)
    results = recommend_movies(target)

    if len(results) == 0:
        print("No recommendations found.")
    else:
        for movie, value in results:
            print(movie, "with score:", round(value, 2))
