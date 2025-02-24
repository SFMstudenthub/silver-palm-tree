import { User, Message, BlogPost, ShopItem, InsertUser } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getMessages(): Promise<Message[]>;
  createMessage(content: string, userId: number): Promise<Message>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  createBlogPost(title: string, content: string, userId: number): Promise<BlogPost>;
  
  getShopItems(): Promise<ShopItem[]>;
  
  sessionStore: session.Store;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Map<number, Message>;
  private blogPosts: Map<number, BlogPost>;
  private shopItems: Map<number, ShopItem>;
  private currentId: number;
  public sessionStore: session.Store;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.blogPosts = new Map();
    this.shopItems = new Map();
    this.currentId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000,
    });
    
    // Initialize some shop items
    const items: ShopItem[] = [
      {
        id: this.currentId++,
        name: "Student Notebook",
        description: "High-quality notebook for students",
        price: 999,
        imageUrl: "https://images.unsplash.com/photo-1493857671505-72967e2e2760"
      },
      {
        id: this.currentId++,
        name: "Premium Backpack",
        description: "Durable backpack for daily use",
        price: 4999,
        imageUrl: "https://images.unsplash.com/photo-1503924986277-3f922045c7bb"
      },
      {
        id: this.currentId++,
        name: "Study Lamp",
        description: "LED desk lamp for late night studying",
        price: 2999,
        imageUrl: "https://images.unsplash.com/photo-1516274626895-055a99214f08"
      }
    ];
    
    items.forEach(item => this.shopItems.set(item.id, item));
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getMessages(): Promise<Message[]> {
    return Array.from(this.messages.values()).sort((a, b) => 
      b.timestamp.getTime() - a.timestamp.getTime()
    );
  }

  async createMessage(content: string, userId: number): Promise<Message> {
    const id = this.currentId++;
    const message = {
      id,
      content,
      userId,
      timestamp: new Date(),
    };
    this.messages.set(id, message);
    return message;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      b.timestamp.getTime() - a.timestamp.getTime()
    );
  }

  async createBlogPost(title: string, content: string, userId: number): Promise<BlogPost> {
    const id = this.currentId++;
    const post = {
      id,
      title,
      content,
      userId,
      timestamp: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getShopItems(): Promise<ShopItem[]> {
    return Array.from(this.shopItems.values());
  }
}

export const storage = new MemStorage();
