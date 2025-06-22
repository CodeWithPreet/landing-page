// Define the Footer component.
export function Footer() {
  // Data structure for the footer links.
  const footerLinks = [
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 font-inter py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo Section */}
        <div className="mb-10 md:mb-0 md:mr-16">
          <div className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold text-xl inline-block">
            LOGO
          </div>
        </div>

        {/* Link Columns Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 lg:gap-24 flex-grow">
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex}>
              <h3 className="font-bold text-lg mb-4 text-gray-100">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((linkText, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#" // Placeholder for actual links
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-base">
                      {linkText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
