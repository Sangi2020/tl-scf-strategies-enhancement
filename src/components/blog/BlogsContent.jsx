"use client";
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { BsCalendar2Date } from 'react-icons/bs';
import Link from 'next/link';
import AuroraBackgroundDemo from '../auroraBackground/AuroraDemo';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

// Blog Card Component (unchanged)
const BlogCard = ({ post }) => {
  // Function to handle premium post click - opening WhatsApp
  const handlePremiumClick = (e) => {
    e.preventDefault(); // Prevent default navigation
    console.log(post);

    // WhatsApp message text - customize as needed
    const message = `🌟 *Hello!* I hope you're doing well.  

I'm interested in purchasing your premium blog post and would love to know more details. Here are the post details:  

📌 *Title:* ${post.title}  
📖 *Excerpt:* ${post.excerpt}  
✍️ *Author:* ${post.author}  
📅 *Published Date:* ${post.date}  

💰 Could you please share details regarding pricing, access, and any additional information?  

Looking forward to your response! 😊`
    // Create WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/+12392274289?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  };

  // For premium posts, use a Link but with custom onClick handler
  if (post.isPremium) {
    return (
      <div
        className="bg-white relative p-4 shadow-lg rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"

      >
        {/* Premium Badge */}
        <div className="absolute top-5 right-5 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-md">
          PREMIUM
        </div>

        <div className="relative h-72 w-full">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full rounded-2xl"
          />

          {/* Purchase Button */}
          <div className="absolute left-5 bottom-5 z-10">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation(); // Stop event from bubbling up to parent
                handlePremiumClick(e);
              }}
            >
              Purchase
            </button>
          </div>
        </div>

        <div className="py-2">
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
    );
  }

  // For regular posts, use Link for navigation to the blog post page
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
        <div className="py-2">
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
// Pagination Component (new)
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    // Always show first page
    pages.push(1);

    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) pages.push(totalPages);

    // Add ellipsis where needed
    return pages.reduce((result, page, index, array) => {
      if (index > 0 && page - array[index - 1] > 1) {
        result.push('...');
      }
      result.push(page);
      return result;
    }, []);
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md flex items-center ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'
          }`}
      >
        <FaChevronLeft className="mr-1" /> Prev
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-3 py-1">...</span>
          ) : (
            <button
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded-md ${currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-100 text-blue-600'
                }`}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md flex items-center ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'
          }`}
      >
        Next <FaChevronRight className="ml-1" />
      </button>
    </div>
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

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // Number of posts to display per page

  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://scf-cms-be-360l.onrender.com/api/v1/web/blog/get-all-blogs');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Blogs:', data);
      setBlogPosts(data.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    // Reset to page 1 whenever filters change
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedTag]);

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

  // Get all posts after applying filters
  const allFilteredPosts = searchTerm ? filteredPosts
    : selectedCategory ? filteredPosts
      : selectedTag ? filteredPosts
        : blogPosts;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allFilteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allFilteredPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0); // Scroll to top when changing page
    setCurrentPage(pageNumber);
  };

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

            {/* Display post count and current page info */}
            {allFilteredPosts.length > 0 && (
              <div className="mb-6 text-sm text-gray-600">
                Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, allFilteredPosts.length)} of {allFilteredPosts.length} posts
              </div>
            )}

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {isLoading ? (
                // Show skeletons while loading
                Array.from({ length: postsPerPage }).map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))
              ) : currentPosts.length > 0 ? (
                // Show filtered results with pagination
                currentPosts.map((post, index) => (
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

            {/* Pagination */}
            {!isLoading && allFilteredPosts.length > postsPerPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
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