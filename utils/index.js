export const newsApiKey = "adee4c5c1b084e88b0b7327ab6fa3da4";
export const newsAppUrl = "https://newsapi.org/v2";
export const numberOfResultPerPage = 20; //select integer value from 20 to 100
export const GoToPage = "Go to Page";
export const getBaseUrl = (
    selectedCountry,
    selectedCategory,
    searchQuery,
    pageNumber
) => {
    var baseUrl = "";
    if (!selectedCategory && !selectedCountry && !searchQuery) {
        baseUrl = `${newsAppUrl}/top-headlines?country=IN${pageNumber ? `&page=${Number(pageNumber) + 1}` : ""}&pageSize=${numberOfResultPerPage}&apiKey=${newsApiKey}`;
    } else {
        baseUrl = `${newsAppUrl}/${!selectedCountry && !selectedCategory ? "everything" : "top-headlines"}?${selectedCountry ? `country=${selectedCountry}` : ""}${selectedCountry && selectedCategory ? "&" : ""}${selectedCategory ? `category=${selectedCategory}` : ""}${searchQuery? `${selectedCountry || selectedCategory ? "&" : ""}q=${searchQuery}`: ""}${pageNumber ? `&page=${Number(pageNumber) + 1}` : ""}&pageSize=${numberOfResultPerPage}&apiKey=${newsApiKey}`;
    }
    return baseUrl;
};
