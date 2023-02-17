"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 73:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_contants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(232);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Canvas = ()=>{
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const images = _shared_contants__WEBPACK_IMPORTED_MODULE_2__/* .canvasImages.map */ .q4.map((source)=>{
            const image = document.createElement("img");
            image.src = source;
            return image;
        });
        let ctx = canvas.getContext("2d");
        const mouse = {
            x: -1000,
            y: -1000
        };
        canvas.addEventListener("mousemove", (e)=>{
            mouse.x = e.clientX;
            mouse.y = e.clientY + Math.abs(canvas.getBoundingClientRect().top);
        });
        canvas.addEventListener("mouseleave", ()=>{
            mouse.x = -1000;
            mouse.y = -1000;
        });
        class Particle {
            constructor(x, y, dx, dy, angle, size, image){
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.angle = angle;
                this.size = size;
                this.image = image;
            }
            update() {
                if (this.x < this.size / 2) this.dx = -this.dx;
                if (this.x > innerWidth - this.size / 2) this.dx = -this.dx;
                if (this.y < this.size / 2) this.dy = -this.dy;
                if (this.y > innerHeight - this.size / 2) this.dy = -this.dy;
                this.x += this.dx;
                this.y += this.dy;
                this.angle += 1;
                this.draw();
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle * (Math.PI / 180));
                ctx.drawImage(this.image, -this.size / 2, -this.size / 2, this.size, this.size);
                ctx.restore();
            }
        }
        let particles = [];
        let expectedSize1 = Math.round(innerWidth / 20);
        let SIZE = expectedSize1 < 30 ? 30 : expectedSize1 > 50 ? 50 : expectedSize1;
        const setup = ()=>{
            let expectedSize = Math.round(innerWidth / 20);
            SIZE = expectedSize < 30 ? 30 : expectedSize > 50 ? 50 : expectedSize;
            particles = images.map((image)=>new Particle(SIZE + Math.random() * (innerWidth - SIZE * 2), SIZE + Math.random() * (innerHeight - SIZE * 2), (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5, 0, SIZE, image)
            );
            canvas.width = innerWidth;
            canvas.height = innerHeight;
        };
        const animate = ()=>{
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            particles.forEach((particle)=>{
                particle.update();
            });
        };
        setup();
        animate();
        window.addEventListener("resize", setup);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.canvas, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 0.6
        },
        transition: {
            duration: 0.4,
            delay: 1.4
        },
        ref: canvasRef,
        className: "absolute inset-0 w-full h-full"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(232);


const Contact = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pb-20",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-center text-4xl mt-14 md:mt-28 mb-10",
                children: "Get in touch"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                "data-scroll": true,
                "data-scroll-speed": "1",
                className: "flex justify-center mx-[5vw] mt-8",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full max-w-[1100px] flex gap-10 flex-col md:flex-row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                action: process.env.NEXT_PUBLIC_FORM_URL,
                                method: "POST",
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        children: "Your name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "name",
                                        name: "name",
                                        placeholder: "John Doe",
                                        required: true,
                                        minLength: 3
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "email",
                                        children: "Your email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        placeholder: "johndoe@gmail.com",
                                        required: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "subject",
                                        children: "Subject"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "subject",
                                        name: "subject",
                                        placeholder: "I want to talk to you",
                                        required: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "mt-2 py-2 text-white rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]",
                                        children: "Send"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl mb-3",
                                    children: "Other places"
                                }),
                                _shared_contants__WEBPACK_IMPORTED_MODULE_1__/* .socialLinks.map */ .KT.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: item.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "w-[30px] h-[30px] rounded-full",
                                                src: item.icon,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: item.title
                                            })
                                        ]
                                    }, item.title)
                                )
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Cursor = ()=>{
    const isFirstMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const realMouse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        x: 0,
        y: 0
    });
    const displayedMouse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        x: 0,
        y: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window.matchMedia("(pointer: coarse)").matches) return;
        window.addEventListener("mousemove", (e)=>{
            if (cursorRef.current) {
                if (isFirstMove.current) {
                    cursorRef.current.style.display = "block";
                    displayedMouse.current.x = e.clientX;
                    displayedMouse.current.y = e.clientY;
                    isFirstMove.current = false;
                }
                realMouse.current.x = e.clientX;
                realMouse.current.y = e.clientY;
            }
        });
        const updateMouse = ()=>{
            requestAnimationFrame(updateMouse);
            displayedMouse.current.x += (realMouse.current.x - displayedMouse.current.x) * 0.1;
            displayedMouse.current.y += (realMouse.current.y - displayedMouse.current.y) * 0.1;
            if (cursorRef.current) {
                cursorRef.current.style.left = `${displayedMouse.current.x}px`;
                cursorRef.current.style.top = `${displayedMouse.current.y}px`;
            }
        };
        updateMouse();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: cursorRef,
        className: "w-7 h-7 bg-transparent border border-white rounded-full fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden transition duration-75"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);


/***/ }),

/***/ 846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);
/* harmony import */ var _shared_contants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(232);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Canvas__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
([_Canvas__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Intro = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative h-screen flex justify-center items-center flex-col gap-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Canvas__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: "h-[10vw] max-h-[100px] min-h-[60px] max-w-[100vw] z-[1]",
                viewBox: "0 0 276 97",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: _shared_contants__WEBPACK_IMPORTED_MODULE_4__/* .characters.map */ .Rr.map((character, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.path, {
                                initial: {
                                    pathLength: 0
                                },
                                animate: {
                                    pathLength: 1
                                },
                                transition: {
                                    delay: index / 10,
                                    duration: 1
                                },
                                d: character,
                                fill: "none",
                                stroke: "#FFF",
                                strokeWidth: "4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.path, {
                                initial: {
                                    fill: "#00000000"
                                },
                                animate: {
                                    fill: "#000000"
                                },
                                transition: {
                                    delay: 0.7 + index / 10,
                                    duration: 0.6
                                },
                                fill: "none",
                                d: character
                            })
                        ]
                    }, character)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.p, {
                "data-scroll": true,
                "data-scroll-speed": "1",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.4,
                    delay: 1.4
                },
                className: "text-3xl text-center z-[1] overflow-hidden",
                children: `I'm a JavaScript & TypeScript Developer`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.a, {
                "data-scroll": true,
                "data-scroll-speed": "2",
                "data-scroll-delay": "1",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.4,
                    delay: 1.4
                },
                className: "absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer",
                href: "#who",
                "data-scroll-to": true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiChevronsDown, {
                    className: "animate-bounce",
                    size: 56
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MyProjects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(652);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./src/components/MyProjects.tsx



const MyProjects = ({ projects  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-center text-4xl mb-10 md:mb-20",
                children: "My projects"
            }),
            projects === null || projects === void 0 ? void 0 : projects.map((project, index)=>{
                /*#__PURE__*/ return (0,jsx_runtime_.jsxs)("div", {
                    className: `item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${index % 2 === 1 ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            "data-scroll": true,
                            "data-scroll-speed": "3",
                            className: "lg:flex-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "border-[#888] border-2 rounded-[20px] overflow-hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "m-auto ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "w-[500px] h-[400px] rounded-[12px] m-auto",
                                        src: project === null || project === void 0 ? void 0 : project.image,
                                        alt: ""
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item-info lg:flex-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-3xl",
                                    children: project.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-[20px] text-justify my-3",
                                    children: project.description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex mt-[25px] gap-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: project.demo,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiLinkExternal, {
                                                    size: 25
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: " Live Demo"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: project.github,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1b222b] hover:bg-[#191e25]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                                                    size: 25
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: " View Github"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, index);
            })
        ]
    });
};
/* harmony default export */ const components_MyProjects = (MyProjects);


/***/ }),

/***/ 394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Skills = ({ skills  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                "data-scroll": true,
                "data-scroll-direction": "horizontal",
                "data-scroll-speed": "-1",
                className: "text-center text-3xl lg:text-4xl",
                children: "My skills & Knowledge"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                "data-scroll": true,
                "data-scroll-direction": "horizontal",
                "data-scroll-speed": "1",
                className: "description text-lg text-center my-[30px]",
                children: "Technologies and languages that I use to make my product everyday"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid justify-center grid-cols-4 md:grid-cols-5 gap-x-[20px] gap-y-[10px] md:gap-y-[20px]",
                children: skills.map((skill)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: skill.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "item flex flex-col items-center justify-around group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "w-[60px] h-[60px] transition duration-300 group-hover:scale-110 bg-[#ddd] p-2 rounded-md",
                                src: skill.image,
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-center",
                                children: skill.title
                            })
                        ]
                    }, skill.link)
                )
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);


/***/ }),

/***/ 368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Who = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "who",
        className: "flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                "data-scroll": true,
                "data-scroll-speed": "2",
                className: "w-[225px] h-[225px] rounded-full",
                src: "/derek.jpg",
                alt: ""
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        "data-scroll": true,
                        "data-scroll-speed": "0.5",
                        className: "title text-[40px]",
                        children: "Who am I?"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        "data-scroll": true,
                        className: "text-lg text-gray-200",
                        id: "story",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "My name is Derek."
                            }),
                            "I am 28 years old, JavaScript Engineer who likes coding and football. As far as now, developed elegant and remarkable projects using various JS frameworks such as React, Next, Vue, Nuxt, Svelte, Angular, React Native, Node, Express, Nest."
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "In addition, I am familiar with integration with other frameworks such as Laravel, Django, and Solidity."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "My personality is ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Creative"
                            }),
                            " and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Active"
                            }),
                            " and I like challenging myself with new skills so that I maintain up-to-date..."
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Who);


/***/ }),

/***/ 442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(// "https://api-ap-northeast-1.graphcms.com/v2/cl1ylp3cg1ase01xucbgc346j/master"
"https://api-ap-northeast-1.hygraph.com/v2/clcab0m8u2ebo01umes2tdbm0/master");


/***/ }),

/***/ 358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ GET_ALL_SKILLS),
/* harmony export */   "i": () => (/* binding */ GET_ALL_PROJECTS)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const GET_ALL_SKILLS = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    skills {
      image
      title
      link
    }
  }
`;
const GET_ALL_PROJECTS = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    projects {
      title
      description
      demo
      github
      image
    }
  }
`;


/***/ }),

/***/ 970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(634);
/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(846);
/* harmony import */ var react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(966);
/* harmony import */ var react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MyProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(639);
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(394);
/* harmony import */ var _components_Who__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(368);
/* harmony import */ var _graphql_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(442);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Intro__WEBPACK_IMPORTED_MODULE_4__]);
_components_Intro__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Home = ({ skills , projects  })=>{
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_5__.LocomotiveScrollProvider, {
        options: {
            smooth: true,
            tablet: {
                smooth: true,
                breakpoint: 768
            }
        },
        watch: [],
        containerRef: containerRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cursor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                "data-scroll-container": true,
                ref: containerRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Who__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        skills: skills.skills
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MyProjects__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        projects: projects.projects
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async ()=>{
    const skills = await _graphql_client__WEBPACK_IMPORTED_MODULE_9__/* .client.request */ .L.request(_graphql_queries__WEBPACK_IMPORTED_MODULE_3__/* .GET_ALL_SKILLS */ .d);
    const projects = await _graphql_client__WEBPACK_IMPORTED_MODULE_9__/* .client.request */ .L.request(_graphql_queries__WEBPACK_IMPORTED_MODULE_3__/* .GET_ALL_PROJECTS */ .i);
    return {
        props: {
            skills,
            projects
        },
        revalidate: 3600
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KT": () => (/* binding */ socialLinks),
/* harmony export */   "Rr": () => (/* binding */ characters),
/* harmony export */   "q4": () => (/* binding */ canvasImages)
/* harmony export */ });
const characters = [
    "M 0 72 L 11.7 4.8 Q 15.8 3.9 19.9 3.35 A 54.376 54.376 0 0 1 23.242 3.015 Q 24.746 2.907 26.436 2.854 A 112.393 112.393 0 0 1 30 2.8 Q 38 2.8 43.65 5.3 A 26.213 26.213 0 0 1 49.912 9.148 A 23.181 23.181 0 0 1 52.9 12.15 Q 56.5 16.5 58.2 22.05 Q 59.9 27.6 59.9 33.7 A 51.336 51.336 0 0 1 58.545 45.716 A 42.238 42.238 0 0 1 55.1 55.1 Q 50.3 64.5 41.5 69.85 Q 32.7 75.2 20.5 75.2 A 82.4 82.4 0 0 1 14.808 75.013 Q 12.138 74.828 9.77 74.459 A 49.14 49.14 0 0 1 9.1 74.35 A 57.115 57.115 0 0 1 3.76 73.188 A 45.593 45.593 0 0 1 0 72 Z M 20 11.8 L 10.6 65.7 A 39.595 39.595 0 0 0 14.14 66.446 A 45.954 45.954 0 0 0 15.5 66.65 A 38.996 38.996 0 0 0 18.906 66.951 A 47.702 47.702 0 0 0 21.1 67 A 31.198 31.198 0 0 0 29.5 65.91 A 25.965 25.965 0 0 0 36.35 62.9 A 27.261 27.261 0 0 0 46.272 51.906 A 32.544 32.544 0 0 0 46.5 51.45 A 34.907 34.907 0 0 0 49.635 41.109 A 45.378 45.378 0 0 0 50.1 34.5 A 31.755 31.755 0 0 0 48.963 25.909 A 28.779 28.779 0 0 0 47.9 22.8 Q 45.7 17.4 41.1 14.1 A 16.781 16.781 0 0 0 35.261 11.478 Q 32.938 10.906 30.22 10.817 A 31.058 31.058 0 0 0 29.2 10.8 Q 26.6 10.8 24.3 11.05 Q 22 11.3 20 11.8 Z",
    "M 105.2 63.3 L 106 71.3 A 33.903 33.903 0 0 1 103.525 72.329 Q 102.154 72.841 100.551 73.331 A 71.576 71.576 0 0 1 98.4 73.95 A 35.228 35.228 0 0 1 92.585 74.994 A 45.074 45.074 0 0 1 88.2 75.2 A 25.965 25.965 0 0 1 81.806 74.442 A 21.265 21.265 0 0 1 76.55 72.35 Q 71.5 69.5 68.65 64.15 A 23.699 23.699 0 0 1 66.27 57.109 A 32.01 32.01 0 0 1 65.8 51.5 A 34.813 34.813 0 0 1 67.895 39.353 A 32.849 32.849 0 0 1 69.25 36.2 Q 72.7 29.2 79.05 25 A 25.315 25.315 0 0 1 90.536 20.973 A 31.965 31.965 0 0 1 93.9 20.8 A 25.579 25.579 0 0 1 98.324 21.163 Q 100.968 21.627 103.139 22.686 A 15.541 15.541 0 0 1 103.75 23 A 17.909 17.909 0 0 1 107.674 25.841 A 15.245 15.245 0 0 1 110 28.7 Q 112.2 32.2 112.2 36.2 A 19.183 19.183 0 0 1 111.803 40.207 Q 111.184 43.106 109.6 45.3 Q 107 48.9 102.9 50.85 Q 98.8 52.8 94.05 53.6 A 57.86 57.86 0 0 1 88.009 54.305 A 48.844 48.844 0 0 1 85 54.4 Q 82.3 54.4 79.65 54.15 A 108.588 108.588 0 0 1 77.456 53.922 Q 76.458 53.807 75.575 53.683 A 59.872 59.872 0 0 1 75 53.6 Q 75.704 59.406 78.807 62.813 A 12.499 12.499 0 0 0 79.7 63.7 A 13.486 13.486 0 0 0 86.701 66.967 A 18.622 18.622 0 0 0 89.7 67.2 A 32.871 32.871 0 0 0 94.286 66.895 A 24.388 24.388 0 0 0 98.6 65.9 Q 101.586 64.905 103.868 63.909 A 39.073 39.073 0 0 0 105.2 63.3 Z M 93.2 28.4 A 16.106 16.106 0 0 0 86.531 29.778 A 15.677 15.677 0 0 0 84.7 30.75 Q 80.9 33.1 78.45 37.15 A 24.072 24.072 0 0 0 75.666 44.026 A 28.963 28.963 0 0 0 75.2 46.4 Q 77.5 46.8 79.85 47.05 A 43.727 43.727 0 0 0 82.636 47.252 A 56.357 56.357 0 0 0 85 47.3 Q 90.513 47.3 94.518 46.288 A 20.157 20.157 0 0 0 98.3 44.95 A 8.906 8.906 0 0 0 101.262 42.745 Q 103.2 40.485 103.2 36.9 A 7.756 7.756 0 0 0 100.743 31.176 A 10.356 10.356 0 0 0 100.45 30.9 A 9.377 9.377 0 0 0 95.965 28.669 A 13.507 13.507 0 0 0 93.2 28.4 Z",
    "M 119.1 74 L 125.7 36.6 Q 125.8 36.1 125.85 35.45 A 17.363 17.363 0 0 0 125.899 34.285 A 19.322 19.322 0 0 0 125.9 34.1 A 7.658 7.658 0 0 0 125.774 32.66 Q 125.452 30.978 124.3 30.15 A 5.761 5.761 0 0 0 122.384 29.27 Q 121.359 29 120.1 29 L 123.2 22 A 17.686 17.686 0 0 1 126.344 22.262 Q 129.413 22.817 131.35 24.55 Q 133.983 26.906 134.183 31.352 A 16.592 16.592 0 0 1 134.2 32.1 L 134.2 34.1 A 31.489 31.489 0 0 1 136.389 29.691 Q 137.74 27.461 139.341 25.837 A 15.524 15.524 0 0 1 141.65 23.9 Q 146.2 20.8 152 20.8 A 25.342 25.342 0 0 1 153.761 20.858 Q 154.593 20.916 155.315 21.032 A 13.077 13.077 0 0 1 155.95 21.15 A 18.344 18.344 0 0 1 157.11 21.434 Q 158.013 21.688 158.7 22 L 154.7 30.8 Q 153.5 30.3 152.2 30.1 A 16.005 16.005 0 0 0 150.986 29.963 Q 150.364 29.916 149.67 29.904 A 27.49 27.49 0 0 0 149.2 29.9 A 10.923 10.923 0 0 0 144.664 30.921 A 15.299 15.299 0 0 0 142.05 32.45 A 15.108 15.108 0 0 0 139.332 35.014 Q 137.364 37.351 135.65 40.9 A 39.337 39.337 0 0 0 133.815 45.476 Q 132.998 47.908 132.294 50.814 A 99.74 99.74 0 0 0 131 57.1 L 128.1 74 L 119.1 74 Z",
    "M 196.5 63.3 L 197.3 71.3 A 33.903 33.903 0 0 1 194.825 72.329 Q 193.454 72.841 191.851 73.331 A 71.576 71.576 0 0 1 189.7 73.95 A 35.228 35.228 0 0 1 183.885 74.994 A 45.074 45.074 0 0 1 179.5 75.2 A 25.965 25.965 0 0 1 173.106 74.442 A 21.265 21.265 0 0 1 167.85 72.35 Q 162.8 69.5 159.95 64.15 A 23.699 23.699 0 0 1 157.57 57.109 A 32.01 32.01 0 0 1 157.1 51.5 A 34.813 34.813 0 0 1 159.195 39.353 A 32.849 32.849 0 0 1 160.55 36.2 Q 164 29.2 170.35 25 A 25.315 25.315 0 0 1 181.836 20.973 A 31.965 31.965 0 0 1 185.2 20.8 A 25.579 25.579 0 0 1 189.624 21.163 Q 192.268 21.627 194.439 22.686 A 15.541 15.541 0 0 1 195.05 23 A 17.909 17.909 0 0 1 198.974 25.841 A 15.245 15.245 0 0 1 201.3 28.7 Q 203.5 32.2 203.5 36.2 A 19.183 19.183 0 0 1 203.103 40.207 Q 202.484 43.106 200.9 45.3 Q 198.3 48.9 194.2 50.85 Q 190.1 52.8 185.35 53.6 A 57.86 57.86 0 0 1 179.309 54.305 A 48.844 48.844 0 0 1 176.3 54.4 Q 173.6 54.4 170.95 54.15 A 108.588 108.588 0 0 1 168.756 53.922 Q 167.758 53.807 166.875 53.683 A 59.872 59.872 0 0 1 166.3 53.6 Q 167.004 59.406 170.107 62.813 A 12.499 12.499 0 0 0 171 63.7 A 13.486 13.486 0 0 0 178.001 66.967 A 18.622 18.622 0 0 0 181 67.2 A 32.871 32.871 0 0 0 185.586 66.895 A 24.388 24.388 0 0 0 189.9 65.9 Q 192.886 64.905 195.168 63.909 A 39.073 39.073 0 0 0 196.5 63.3 Z M 184.5 28.4 A 16.106 16.106 0 0 0 177.831 29.778 A 15.677 15.677 0 0 0 176 30.75 Q 172.2 33.1 169.75 37.15 A 24.072 24.072 0 0 0 166.966 44.026 A 28.963 28.963 0 0 0 166.5 46.4 Q 168.8 46.8 171.15 47.05 A 43.727 43.727 0 0 0 173.936 47.252 A 56.357 56.357 0 0 0 176.3 47.3 Q 181.813 47.3 185.818 46.288 A 20.157 20.157 0 0 0 189.6 44.95 A 8.906 8.906 0 0 0 192.562 42.745 Q 194.5 40.485 194.5 36.9 A 7.756 7.756 0 0 0 192.043 31.176 A 10.356 10.356 0 0 0 191.75 30.9 A 9.377 9.377 0 0 0 187.265 28.669 A 13.507 13.507 0 0 0 184.5 28.4 Z",
    "M 208.9 74 L 221.9 0 L 230.9 0 L 225.5 30.7 Q 228.2 26.1 232.6 23.45 A 18.617 18.617 0 0 1 241.647 20.816 A 22.313 22.313 0 0 1 242.5 20.8 Q 246.8 20.8 250.15 22.6 Q 253.5 24.4 255.4 27.45 Q 257.3 30.5 257.3 34.2 A 18.45 18.45 0 0 1 256.778 38.732 A 11.978 11.978 0 0 1 251.95 45.85 Q 246.741 49.501 238.83 49.597 A 35.371 35.371 0 0 1 238.4 49.6 L 237.4 49.6 A 6.217 6.217 0 0 1 236.997 49.586 Q 236.772 49.571 236.517 49.541 A 12.701 12.701 0 0 1 236.2 49.5 L 244.7 62.5 A 14.151 14.151 0 0 0 246.156 64.381 Q 247.116 65.418 248.194 66.09 A 8.543 8.543 0 0 0 248.55 66.3 A 8.309 8.309 0 0 0 250.509 67.066 Q 251.446 67.31 252.56 67.417 A 19.302 19.302 0 0 0 254.4 67.5 L 251.3 74.5 A 26.094 26.094 0 0 1 247.825 74.281 Q 246.025 74.039 244.503 73.529 A 14.216 14.216 0 0 1 243.5 73.15 Q 240.956 72.077 238.855 69.14 A 20.684 20.684 0 0 1 237.8 67.5 L 225.5 46.3 L 226.4 43.4 A 11.949 11.949 0 0 0 227.638 43.89 Q 228.336 44.125 229.156 44.323 A 24.581 24.581 0 0 0 230.2 44.55 Q 232.5 45 235.4 45 A 24.59 24.59 0 0 0 239.069 44.745 Q 240.965 44.458 242.492 43.849 A 10.353 10.353 0 0 0 245.25 42.25 Q 248.6 39.5 248.6 35.2 A 6.966 6.966 0 0 0 246.488 30.085 A 8.518 8.518 0 0 0 246.35 29.95 A 7.554 7.554 0 0 0 242.64 28.034 A 11.083 11.083 0 0 0 240.3 27.8 A 10.973 10.973 0 0 0 237.885 28.089 Q 236.732 28.349 235.465 28.845 A 23.786 23.786 0 0 0 233.85 29.55 Q 230.715 31.053 227.912 34.511 A 28.624 28.624 0 0 0 227 35.7 A 20.571 20.571 0 0 0 224.775 39.687 Q 223.919 41.677 223.274 44.09 A 46.899 46.899 0 0 0 222.4 48.1 L 217.9 74 L 208.9 74 Z", 
];
const canvasImages = [
    "html",
    "javascript",
    "css",
    "typescript",
    "php",
    "python",
    "react",
    "vue",
    "nodejs",
    "next",
    "svelte",
    "laravel",
    "nest",
    "tailwindcss",
    "sass",
    "git",
    "vite",
    "vscode",
    "webpack", 
].map((icon)=>`https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${icon}.svg&w=50&h=50`
);
const socialLinks = [
    {
        title: "Linkedin",
        icon: "data:image/png;base64,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",
        link: "https://www.linkedin.com/in/derek-li-130807262/"
    },
    {
        title: "Xing",
        icon: "data:image/png;base64,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",
        link: "https://www.xing.com/profile/Derek_Li"
    },
    {
        title: "Skype",
        icon: "data:image/jpeg;base64,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",
        link: "https://www.skype.com/465671d98faf727d"
    },
    {
        title: "Github",
        icon: "/github.png",
        link: "https://github.com/jaguar-person"
    },
    {
        title: "Discord",
        icon: "/discord.png",
        link: "https://discord.com/users/877882975855992852"
    }, 
];


/***/ }),

/***/ 805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 966:
/***/ ((module) => {

module.exports = require("react-locomotive-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(970));
module.exports = __webpack_exports__;

})();