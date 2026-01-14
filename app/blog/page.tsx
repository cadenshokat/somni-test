'use client';


import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, ArrowRight, Search, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    slug: 'understanding-ahi-scores',
    title: 'Understanding Your AHI Score: What It Means for Your Sleep Apnea',
    excerpt: 'Your Apnea-Hypopnea Index (AHI) is a key measure of sleep apnea severity. Learn how to interpret your score and what it means for your treatment.',
    category: 'Education',
    author: 'Dr. Sarah Mitchell',
    date: '2026-01-10',
    readTime: '5 min read',
    image: null,
  },
  {
    id: 2,
    slug: 'cpap-vs-oral-appliance',
    title: 'CPAP vs. Oral Appliances: Which Treatment is Right for You?',
    excerpt: 'Comparing the two most popular sleep apnea treatments to help you make an informed decision about your therapy options.',
    category: 'Treatment',
    author: 'Dr. Michael Chen',
    date: '2026-01-08',
    readTime: '7 min read',
    image: null,
  },
  {
    id: 3,
    slug: 'traveling-with-cpap',
    title: '10 Tips for Traveling with Your CPAP Machine',
    excerpt: 'Don\'t let sleep apnea hold you back from seeing the world. Here\'s everything you need to know about traveling with CPAP.',
    category: 'Lifestyle',
    author: 'Jennifer Adams',
    date: '2026-01-05',
    readTime: '6 min read',
    image: null,
  },
  {
    id: 4,
    slug: 'sleep-apnea-and-weight',
    title: 'The Connection Between Weight and Sleep Apnea',
    excerpt: 'Understanding how weight affects sleep apnea and how treating sleep apnea can help with weight management.',
    category: 'Health',
    author: 'Dr. Sarah Mitchell',
    date: '2026-01-02',
    readTime: '8 min read',
    image: null,
  },
  {
    id: 5,
    slug: 'cleaning-cpap-equipment',
    title: 'The Ultimate Guide to Cleaning Your CPAP Equipment',
    excerpt: 'A step-by-step guide to keeping your CPAP machine, mask, and accessories clean and hygienic.',
    category: 'Maintenance',
    author: 'Tom Reynolds',
    date: '2025-12-28',
    readTime: '4 min read',
    image: null,
  },
  {
    id: 6,
    slug: 'partner-sleep-apnea',
    title: 'Supporting a Partner with Sleep Apnea',
    excerpt: 'Practical advice for partners of those diagnosed with sleep apnea, from encouraging treatment to adjusting to CPAP.',
    category: 'Lifestyle',
    author: 'Jennifer Adams',
    date: '2025-12-22',
    readTime: '5 min read',
    image: null,
  },
];

const categories = ['All', 'Education', 'Treatment', 'Lifestyle', 'Health', 'Maintenance'];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (<>
    
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sleep Health Blog</h1>
            <p className="text-xl text-primary-foreground/80">
              Expert insights, tips, and guides to help you get better sleep and 
              make the most of your sleep apnea treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 bg-background">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No articles found matching your criteria.</p>
              <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow flex flex-col">
                  <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                      <span className="text-4xl">📖</span>
                    </div>
                    <Badge className="absolute top-3 left-3">{post.category}</Badge>
                  </div>
                  <CardHeader className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for the latest sleep health tips, product updates, 
            and exclusive offers.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input placeholder="Enter your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    
  </>
  );
}
