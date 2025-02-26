class SPANavigator {
    constructor(options = {}) {
        this.pages = options.pages || [];
        this.defaultPage = options.defaultPage || "home";

        this.init();
    }

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            let path = location.pathname.substring(1);

            // Ensure default page loads when on root "/"
            if (!path || !this.pages.includes(path)) {
                this.navigateTo(this.defaultPage, false);
            } else {
                this.showPage(path, false);
            }
        });

        window.onpopstate = (event) => {
            if (event.state && event.state.page) {
                this.showPage(event.state.page, false);
            } else {
                this.showPage(this.defaultPage, false);
            }
        };
    }

    showPage(pageId, addToHistory = true) {
        // Hide all sections
        this.pages.forEach(id => {
            const section = document.getElementById(id);
            if (section) section.style.display = "none";
        });

        // Show the selected section
        const activeSection = document.getElementById(pageId);
        if (activeSection) {
            activeSection.style.display = "block";
        } else {
            console.error(`Page '${pageId}' not found.`);
            return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });

        // Add to history only if required
        if (addToHistory) {
            history.pushState({ page: pageId }, "", `/${pageId}`);
        }
    }

    navigateTo(pageId, addToHistory = true) {
        this.showPage(pageId, addToHistory);
    }
}

// Universal Export for Both ES Modules and Browser
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = SPANavigator;
} else {
    window.SPANavigator = SPANavigator;
}
