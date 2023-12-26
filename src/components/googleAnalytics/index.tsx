const GoogleAnalytics = ({ ga_id }: { ga_id: string }) => (
    <>
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', '${ga_id}', { page_path: window.location.pathname });
                `
            }}
        />
    </>
)

export default GoogleAnalytics