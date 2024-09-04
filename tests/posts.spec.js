import { test, expect } from "@playwright/test";
import posts from "../data/posts.json";
import users from "../data/users.json";

test("Testing getting Post", async ({ request }) => {
  // Find the user with ID 7
  const user = users.find(user => user.id === 7);
  if (!user) {
    console.error("User with ID 7 not found");
    return;
  }

  // Get the name of the user
  const username = user.name;

  // Filter posts to only include those with userId equal to 7
  const userPosts = posts.filter(post => post.userId === 7);

  console.log(` Posts by ${username} `);
  console.log('-------------------------');

  // Make a single API request
  const res = await request.get('/posts');

  // Validate response status and body
  expect(res.status()).toBe(200);
  expect(res.ok()).toBeTruthy();

  const body = await res.json();

  for (const post of userPosts) {
    const matchedPost = body.find(p => p.id === post.id);
    expect(matchedPost).toBeTruthy();
    console.log(`Post ID: ${post.id}, Title: ${post.title}`);
  }
});