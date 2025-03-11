"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BsCalendar2Date, BsArrowLeft, BsPerson } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import AuroraBackgroundDemo from "@/components/auroraBackground/AuroraDemo";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // Import rehype-raw for HTML support

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://scf-cms-be-360l.onrender.com/api/v1/web/blog/get-blog/${params?.id}`);
        if (!res.ok) throw new Error("Blog post not found");
        const data = await res.json();
        console.log(data);
        setPost({
          ...data.data,
          title: data.data.title.replace(/^"|"$/g, ""),
          author: data.data.author.replace(/^"|"$/g, ""),
          excerpt: data.data.excerpt.replace(/^"|"$/g, ""),
        });
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (params?.id) {
      fetchPost();
    }
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-600">Loading blog post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AuroraBackgroundDemo title="Blog" description="Post not found" />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">
            <BsArrowLeft />
            Return to Blog List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuroraBackgroundDemo title="Blog Details" description={post.title} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-8">
          <header>
            <h1 className="text-4xl font-bold mb-4 text-title">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <span className="flex items-center gap-2">
                <BsCalendar2Date className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <BsPerson className="w-4 h-4" />
                {post.author}
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="text-lg text-gray-700 font-medium border-l-4 border-blue-500 pl-4 mb-8">
              {post.excerpt}
            </div>

            {/* Render HTML-formatted content correctly */}
            <ReactMarkdown rehypePlugins={[rehypeRaw]} className="text-gray-700">
              {post.content}
            </ReactMarkdown>
          </div>

          <footer className="border-t border-gray-200 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <BsArrowLeft className="w-4 h-4" />
              Back to Blog List
            </Link>
          </footer>
        </div>
      </article>
    </div>
  );
}
