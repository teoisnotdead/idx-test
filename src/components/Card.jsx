

export const Card = ({name = 'Nombre', image, race = 'Sayajin', ki = 0}) => {
    return (
        <>
            <section className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="w-full max-w-md p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 text-center">
                    <img className="mx-auto object-cover h-72 mb-4" src={image} alt={name} />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {race}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <strong>Ki:</strong> {ki}
                    </p>
                </div>
            </section>
        </>
    )
}
