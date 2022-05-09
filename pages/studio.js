import dynamic from "next/dynamic";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const Editor = dynamic(() => import("../components/editor"), { ssr: false });

export default function CreatePost() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-slate-900 py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-4xl font-blod text-gray-900 dark:text-slate-100">
                            {" "}
                            Article Metadata{" "}
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white dark:bg-slate-900 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div>
                          <div className="md:grid md:grid-cols-4 md:gap-6">
                            <div className="mt-5 md:mt-0 md:col-span-4">
                              <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 space-y-6 sm:p-6">
                                  <div>
                                    <label
                                      htmlFor="title"
                                      className="block text-sm font-medium text-gray-700 dark:text-slate-100"
                                    >
                                      Title
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                      <input
                                        type="text"
                                        name="company-website"
                                        id="title"
                                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                        placeholder="My Blog Post"
                                      />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-slate-300">
                                      Should be unique.
                                    </p>
                                  </div>
                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="author"
                                      className="block text-sm font-medium text-gray-700 dark:text-slate-100"
                                    >
                                      Author
                                    </label>
                                    <select
                                      id="author"
                                      name="author"
                                      autoComplete="author-name"
                                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option>SEYEDAMIR TADRISI</option>
                                    </select>
                                  </div>
                                  <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-3">
                                      <label
                                        htmlFor="slug"
                                        className="block text-sm font-medium text-gray-700 dark:text-slate-100"
                                      >
                                        Slug
                                      </label>
                                      <div className="mt-1 flex shadow-sm">
                                        <input
                                          type="text"
                                          name="slug"
                                          id="slug"
                                          className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                          placeholder="my-blog-post"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="about"
                                      className="block text-sm font-medium text-gray-700 dark:text-slate-100"
                                    >
                                      SEO Title
                                    </label>
                                    <div className="mt-1">
                                      <input
                                        id="seo-title"
                                        name="seo-title"
                                        type="text"
                                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="My Blog Post"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="about"
                                      className="block text-sm font-medium text-gray-700 dark:text-slate-100"
                                    >
                                      SEO Description
                                    </label>
                                    <div className="mt-1">
                                      <textarea
                                        id="seo-description"
                                        name="seo-description"
                                        rows={4}
                                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-100">
                                      Cover photo
                                    </label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                      <div className="space-y-1 text-center">
                                        <svg
                                          className="mx-auto h-12 w-12 text-gray-400"
                                          stroke="currentColor"
                                          fill="none"
                                          viewBox="0 0 48 48"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                          <label
                                            htmlFor="cover-photo"
                                            className="relative cursor-pointer rounded-md font-medium text-blue-400 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                          >
                                            <span>Upload a file</span>
                                            <input
                                              id="cover-photo"
                                              name="cover-photo"
                                              type="file"
                                              className="sr-only"
                                            />
                                          </label>
                                        </div>
                                        <span className="text-xs text-gray-500 dark:text-slate-100">
                                          PNG, JPG, GIF up to 10MB
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white mb-4">
                Create a new Article
              </h1>
              <button onClick={() => setOpen(true)} className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                { open === true ? "Close" : "Open"} Meta
              </button>
            </div>
          </header>
        </div>
        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <div className="border-4 border-dashed border-gray-200 rounded-lg pt-10">
                <Editor />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
