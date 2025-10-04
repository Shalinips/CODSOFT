This is a simple Python project where I built a recommendation system.  
It suggests movies to users based on what other similar users liked.  
I have implemented it using "collaborative filtering" with cosine similarity.

Dataset Used:
I created a very small dataset of 3 users and 4 movies.  
Each user either liked/watched a movie (1) or did not like/did not watch (0).

| User   | Inception | Titanic | Matrix | Notebook |
|--------|-----------|---------|--------|----------|
| User1  | 1         | 0       | 1      | 0        |
| User2  | 1         | 1       | 0      | 1        |
| User3  | 0         | 1       | 1      | 0        |


How it Works:
1. First, I calculate similarity between two users using cosine similarity.  
2. Then I check which movies the similar users liked.  
3. If the target user has not watched those movies, I recommend them.  
4. Finally, the recommendations are sorted by score.

How to Run:
1. Clone the repository  
   git clone https://github.com/your-username/recommendation-system.git
