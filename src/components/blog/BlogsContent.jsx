"use client";
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { BsCalendar2Date } from 'react-icons/bs';
import Link from 'next/link';
import AuroraBackgroundDemo from '../auroraBackground/AuroraDemo';

// Skeleton Loading Component (unchanged)
const BlogCardSkeleton = () => {
  return (
    <div className="bg-slate-200 relative p-4 shadow-lg rounded-2xl overflow-hidden">
      <div className="relative h-72 w-full bg-gray-400 animate-pulse rounded-2xl" />
      <div className="p-3 space-y-3">
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-gray-400 animate-pulse rounded-full" />
          <div className="w-32 h-4 bg-gray-400 animate-pulse rounded" />
        </div>
        <div className="w-full h-6 bg-gray-400 animate-pulse rounded" />
        <div className="w-full h-4 bg-gray-400 animate-pulse rounded" />
        <div className="w-40 h-4 bg-gray-400 animate-pulse rounded" />
      </div>
    </div>
  );
};

// Blog Card Component (slightly modified to show tags)
const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`} passHref>
      <div className="bg-white relative p-4 shadow-lg rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <div className="relative h-72 w-full">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className=" py-2">
          
          <p className="text-gray-600 flex gap-2 text-xs">
            <BsCalendar2Date className="text-black" />
            {post.author} 
          </p>
          <h3 className="mt-1 text-lg font-semibold text-title line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-3 text-gray-700 text-xs line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

// SearchBar Component (unchanged)
const SearchBar = ({ onSearch }) => {
  return (
    <div className="rounded-lg items-center shadow-md p-1 bg-black flex">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 focus:outline-none focus:ring-2 rounded-lg rounded-e-none"
      />
      <div className="h-full w-fit flex justify-center items-center px-5 text-white bg-black">
        <FaSearch />
      </div>
    </div>
  );
};

// Main Blog Content Component
const BlogContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://scf-cms-be-360l.onrender.com/api/v1/web/blog/get-all-blogs');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Extract JSON data from response
      console.log('Blogs:', data);
      setBlogPosts(data.data); // Use the actual data from the API response
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  
  

  const popularPosts = [
    {
      title: 'Understanding Supply Chain Finance Fundamentals',
      imageUrl: '/images/blog/5.png',
      description: 'An introduction to the basics of supply chain finance and how it benefits businesses in managing cash flow effectively.',
    },
    {
      title: 'Innovations in Supply Chain Finance for Small Businesses',
      imageUrl: '/images/blog/4.png',
      description: 'Exploring new advancements in supply chain finance that make it accessible to small and medium enterprises.',
    },
    {
      title: 'How Supply Chain Finance Strengthens Business Resilience',
      imageUrl: '/images/blog/3.png',
      description: 'Insights into how companies can enhance resilience through strategic supply chain finance solutions.',
    },
  ];
  

  const categories = [
    'Supply Chain Finance',
    'Industry Events',
    'Best Practices',
    'Case Studies',
    'Technology in SCF'
  ];
  
  const tags = [
    'Supplier Onboarding',
    'Risk Management',
    'Technology',
    'Trade Dynamics',
    'Best Practices',
    'Supply Chain Engagement',
    'Innovation',
    'Target Setting',
    'Structure Selection',
    'Case Study'
  ];
  
  const handleSearch = (value) => {
    setSearchTerm(value);
    setSelectedCategory('');
    setSelectedTag('');
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const filtered = blogPosts.filter(post => 
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPosts(filtered);
      setIsLoading(false);
    }, 1000);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setSearchTerm('');
    setSelectedTag('');
    setIsLoading(true);

    setTimeout(() => {
      const filtered = blogPosts.filter(post => 
        post.category === category
      );
      setFilteredPosts(filtered);
      setIsLoading(false);
    }, 500);
  };

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
    setSearchTerm('');
    setSelectedCategory('');
    setIsLoading(true);

    setTimeout(() => {
      const filtered = blogPosts.filter(post => 
        post.tags && post.tags.includes(tag)
      );
      setFilteredPosts(filtered);
      setIsLoading(false);
    }, 500);
  };

  const displayPosts = searchTerm ? filteredPosts 
    : selectedCategory ? filteredPosts 
    : selectedTag ? filteredPosts 
    : blogPosts;

  return (
    <>
      <AuroraBackgroundDemo
        title={'Blogs'} 
        description={'Elevate Your Supply Chain Finance Strategy'} 
        link={'Learn More'} 
      />
      <div className="text-stone-800 py-10 flex justify-center max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Search Bar on top for mobile */}
          <div className="lg:hidden order-first mb-8 w-full">
            <SearchBar onSearch={handleSearch} />
          </div>
    
          {/* Blog Posts Section */}
          <div className="lg:col-span-2">
            {/* Current Filter Display */}
            {(searchTerm || selectedCategory || selectedTag) && (
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {searchTerm && (
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      Search: {searchTerm}
                      <button onClick={() => setSearchTerm('')} className="text-red-500">×</button>
                    </span>
                  )}
                  {selectedCategory && (
                    <span className="bg-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      Category: {selectedCategory}
                      <button onClick={() => setSelectedCategory('')} className="text-red-500">×</button>
                    </span>
                  )}
                  {selectedTag && (
                    <span className="bg-green-200 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      Tag: {selectedTag}
                      <button onClick={() => setSelectedTag('')} className="text-red-500">×</button>
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {isLoading ? (
                // Show skeletons while loading
                Array.from({ length: 4 }).map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))
              ) : displayPosts.length > 0 ? (
                // Show filtered results
                displayPosts.map((post, index) => (
                  <BlogCard key={index} post={post} />
                ))
              ) : (
                // Show no results message
                <div className="col-span-2 text-center py-10">
                  <h3 className="text-xl font-semibold text-gray-600">
                    No posts found {searchTerm ? `matching "${searchTerm}"` : 
                    selectedCategory ? `in category "${selectedCategory}"` : 
                    selectedTag ? `with tag "${selectedTag}"` : ''}
                  </h3>
                </div>
              )}
            </div>
          </div>
    
          {/* Sidebar Section */}
          <div className="space-y-8 order-last lg:order-none">
            
            {/* Search Bar for desktop view */}
            <div className="hidden lg:block">
              <SearchBar onSearch={handleSearch} />
            </div>
    
            {/* Popular Posts */}
            <div className="bg-white p-6 shadow-md">
              <h4 className="text-lg font-semibold mb-4">Popular Posts</h4>
              <ul>
                {popularPosts.map((post, index) => (
                  <li key={index} className="mb-2 gap-2 justify-center items-center w-fit flex">
                    <Image src={post.imageUrl} alt="Popular Post" width={200} height={200} className="h-20 w-20 object-cover" />
                    <Link href="/popularposts" className="text-title hover:underline">{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
    
            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="mb-2 text-gray-700">
                    <button 
                      onClick={() => handleCategoryFilter(category)}
                      className={`text-gray-700 hover:text-blue-500 ${selectedCategory === category ? 'font-bold text-blue-600' : ''}`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
    
            {/* Tags */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4">Tags</h4>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleTagFilter(tag)}
                    className={`mr-2 mb-2 inline-block px-3 py-1 text-sm bg-gray-200 rounded-full hover:bg-gray-300 ${selectedTag === tag ? 'bg-blue-200' : ''}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;