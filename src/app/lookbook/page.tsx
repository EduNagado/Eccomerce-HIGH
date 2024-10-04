
const lookBooks = [
    { name: 'Foto 1', href: '#', imageSrc: '/imgLookbook/1a.png' },
    { name: 'Foto 2', href: '#', imageSrc: '/imgLookbook/2a.png' },
    { name: 'Foto 3', href: '#', imageSrc: '/imgLookbook/3a.png' },
    { name: 'Foto 4', href: '#', imageSrc: '/imgLookbook/4a.png' },
    { name: 'Foto 5', href: '#', imageSrc: '/imgLookbook/5a.png' },
    { name: 'Foto 6', href: '#', imageSrc: '/imgLookbook/6a.png' },
    { name: 'Foto 7', href: '#', imageSrc: '/imgLookbook/7a.png' },
    { name: 'Foto 8', href: '#', imageSrc: '/imgLookbook/8a.png' },
    { name: 'Foto 9', href: '#', imageSrc: '/imgLookbook/9a.png' },
    { name: 'Foto 10', href: '#', imageSrc: '/imgLookbook/10a.png' },
    { name: 'Foto 11', href: '#', imageSrc: '/imgLookbook/11a.png' },
    { name: 'Foto 12', href: '#', imageSrc: '/imgLookbook/12a.png' },
];

export default function LookBook() {
    return (
        <section className="flex flex-col items-center justify-between p-1">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
                        {lookBooks.map((lookBook, index) => (
                            <div key={index} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-96">
                                    <img
                                        src={lookBook.imageSrc}
                                        alt={lookBook.name}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
