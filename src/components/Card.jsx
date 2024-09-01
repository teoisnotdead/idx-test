


export const Card = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="w-full max-w-md p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Card title
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <div className="flex items-center mt-6 space-x-3 sm:space-x-4">
                        <a href="#" className="inline-flex items-center justify-center px-5 py-2.5
                    text-center text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
                    focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Button
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
