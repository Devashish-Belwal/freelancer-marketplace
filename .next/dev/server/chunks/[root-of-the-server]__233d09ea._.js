module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/src/prisma/contract.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"schemaVersion\":\"1\",\"targetFamily\":\"sql\",\"target\":\"postgres\",\"profileHash\":\"3916f444a8a17ad749191acf9e08dad97d1a327b88c2f1d45d12f240296aa8b2\",\"roots\":{\"contract\":{\"model\":\"Contract\",\"namespace\":\"public\"},\"project\":{\"model\":\"Project\",\"namespace\":\"public\"},\"proposal\":{\"model\":\"Proposal\",\"namespace\":\"public\"},\"user\":{\"model\":\"User\",\"namespace\":\"public\"}},\"domain\":{\"namespaces\":{\"public\":{\"enum\":{\"ContractStatus\":{\"codecId\":\"pg/text@1\",\"members\":[{\"name\":\"active\",\"value\":\"active\"}]},\"ProjectStatus\":{\"codecId\":\"pg/text@1\",\"members\":[{\"name\":\"open\",\"value\":\"open\"},{\"name\":\"in_progress\",\"value\":\"in_progress\"}]},\"ProposalStatus\":{\"codecId\":\"pg/text@1\",\"members\":[{\"name\":\"pending\",\"value\":\"pending\"},{\"name\":\"accepted\",\"value\":\"accepted\"},{\"name\":\"rejected\",\"value\":\"rejected\"}]},\"Role\":{\"codecId\":\"pg/text@1\",\"members\":[{\"name\":\"client\",\"value\":\"client\"},{\"name\":\"freelancer\",\"value\":\"freelancer\"}]}},\"models\":{\"Contract\":{\"fields\":{\"amount\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/int4@1\",\"kind\":\"scalar\"}},\"clientId\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"createdAt\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/timestamptz-temporal@1\",\"kind\":\"scalar\"}},\"freelancerId\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"id\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"projectId\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"status\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"},\"valueSet\":{\"entityKind\":\"enum\",\"entityName\":\"ContractStatus\",\"namespaceId\":\"public\",\"plane\":\"domain\"}}},\"relations\":{\"client\":{\"cardinality\":\"N:1\",\"on\":{\"localFields\":[\"clientId\"],\"targetFields\":[\"id\"]},\"to\":{\"model\":\"User\",\"namespace\":\"public\"}},\"freelancer\":{\"cardinality\":\"N:1\",\"on\":{\"localFields\":[\"freelancerId\"],\"targetFields\":[\"id\"]},\"to\":{\"model\":\"User\",\"namespace\":\"public\"}},\"project\":{\"cardinality\":\"N:1\",\"on\":{\"localFields\":[\"projectId\"],\"targetFields\":[\"id\"]},\"to\":{\"model\":\"Project\",\"namespace\":\"public\"}}},\"storage\":{\"fields\":{\"amount\":{\"column\":\"amount\"},\"clientId\":{\"column\":\"clientId\"},\"createdAt\":{\"column\":\"createdAt\"},\"freelancerId\":{\"column\":\"freelancerId\"},\"id\":{\"column\":\"id\"},\"projectId\":{\"column\":\"projectId\"},\"status\":{\"column\":\"status\"}},\"namespaceId\":\"public\",\"table\":\"contract\"}},\"Project\":{\"fields\":{\"budgetMax\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/int4@1\",\"kind\":\"scalar\"}},\"budgetMin\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/int4@1\",\"kind\":\"scalar\"}},\"category\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"clientId\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"createdAt\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/timestamptz-temporal@1\",\"kind\":\"scalar\"}},\"deadline\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/timestamptz-temporal@1\",\"kind\":\"scalar\"}},\"description\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"id\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"status\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"},\"valueSet\":{\"entityKind\":\"enum\",\"entityName\":\"ProjectStatus\",\"namespaceId\":\"public\",\"plane\":\"domain\"}},\"title\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}}},\"relations\":{\"client\":{\"cardinality\":\"N:1\",\"on\":{\"localFields\":[\"clientId\"],\"targetFields\":[\"id\"]},\"to\":{\"model\":\"User\",\"namespace\":\"public\"}},\"contract\":{\"cardinality\":\"1:1\",\"on\":{\"localFields\":[\"id\"],\"targetFields\":[\"projectId\"]},\"to\":{\"model\":\"Contract\",\"namespace\":\"public\"}},\"proposals\":{\"cardinality\":\"1:N\",\"on\":{\"localFields\":[\"id\"],\"targetFields\":[\"projectId\"]},\"to\":{\"model\":\"Proposal\",\"namespace\":\"public\"}}},\"storage\":{\"fields\":{\"budgetMax\":{\"column\":\"budgetMax\"},\"budgetMin\":{\"column\":\"budgetMin\"},\"category\":{\"column\":\"category\"},\"clientId\":{\"column\":\"clientId\"},\"createdAt\":{\"column\":\"createdAt\"},\"deadline\":{\"column\":\"deadline\"},\"description\":{\"column\":\"description\"},\"id\":{\"column\":\"id\"},\"status\":{\"column\":\"status\"},\"title\":{\"column\":\"title\"}},\"namespaceId\":\"public\",\"table\":\"project\"}},\"Proposal\":{\"fields\":{\"coverLetter\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"createdAt\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/timestamptz-temporal@1\",\"kind\":\"scalar\"}},\"estimatedDuration\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/int4@1\",\"kind\":\"scalar\"}},\"freelancerId\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"id\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"projectId\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"proposedPrice\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/int4@1\",\"kind\":\"scalar\"}},\"status\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"},\"valueSet\":{\"entityKind\":\"enum\",\"entityName\":\"ProposalStatus\",\"namespaceId\":\"public\",\"plane\":\"domain\"}}},\"relations\":{\"freelancer\":{\"cardinality\":\"N:1\",\"on\":{\"localFields\":[\"freelancerId\"],\"targetFields\":[\"id\"]},\"to\":{\"model\":\"User\",\"namespace\":\"public\"}},\"project\":{\"cardinality\":\"N:1\",\"on\":{\"localFields\":[\"projectId\"],\"targetFields\":[\"id\"]},\"to\":{\"model\":\"Project\",\"namespace\":\"public\"}}},\"storage\":{\"fields\":{\"coverLetter\":{\"column\":\"coverLetter\"},\"createdAt\":{\"column\":\"createdAt\"},\"estimatedDuration\":{\"column\":\"estimatedDuration\"},\"freelancerId\":{\"column\":\"freelancerId\"},\"id\":{\"column\":\"id\"},\"projectId\":{\"column\":\"projectId\"},\"proposedPrice\":{\"column\":\"proposedPrice\"},\"status\":{\"column\":\"status\"}},\"namespaceId\":\"public\",\"table\":\"proposal\"}},\"User\":{\"fields\":{\"createdAt\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/timestamptz-temporal@1\",\"kind\":\"scalar\"}},\"email\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"id\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"name\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"password\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"}},\"role\":{\"nullable\":false,\"type\":{\"codecId\":\"pg/text@1\",\"kind\":\"scalar\"},\"valueSet\":{\"entityKind\":\"enum\",\"entityName\":\"Role\",\"namespaceId\":\"public\",\"plane\":\"domain\"}}},\"relations\":{\"contractsAsClient\":{\"cardinality\":\"1:N\",\"on\":{\"localFields\":[\"id\"],\"targetFields\":[\"clientId\"]},\"to\":{\"model\":\"Contract\",\"namespace\":\"public\"}},\"contractsAsFreelancer\":{\"cardinality\":\"1:N\",\"on\":{\"localFields\":[\"id\"],\"targetFields\":[\"freelancerId\"]},\"to\":{\"model\":\"Contract\",\"namespace\":\"public\"}},\"projects\":{\"cardinality\":\"1:N\",\"on\":{\"localFields\":[\"id\"],\"targetFields\":[\"clientId\"]},\"to\":{\"model\":\"Project\",\"namespace\":\"public\"}},\"proposals\":{\"cardinality\":\"1:N\",\"on\":{\"localFields\":[\"id\"],\"targetFields\":[\"freelancerId\"]},\"to\":{\"model\":\"Proposal\",\"namespace\":\"public\"}}},\"storage\":{\"fields\":{\"createdAt\":{\"column\":\"createdAt\"},\"email\":{\"column\":\"email\"},\"id\":{\"column\":\"id\"},\"name\":{\"column\":\"name\"},\"password\":{\"column\":\"password\"},\"role\":{\"column\":\"role\"}},\"namespaceId\":\"public\",\"table\":\"user\"}}}}}},\"storage\":{\"namespaces\":{\"public\":{\"entries\":{\"table\":{\"contract\":{\"checks\":[{\"expression\":\"\\\"status\\\" IN ('active')\",\"name\":\"contract_status_check_24c8121c\",\"prefix\":\"contract_status_check\"}],\"columns\":{\"amount\":{\"codecId\":\"pg/int4@1\",\"nativeType\":\"int4\",\"nullable\":false},\"clientId\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"createdAt\":{\"codecId\":\"pg/timestamptz-temporal@1\",\"default\":{\"expression\":\"now()\",\"kind\":\"function\"},\"nativeType\":\"timestamptz\",\"nullable\":false},\"freelancerId\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"id\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"projectId\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"status\":{\"codecId\":\"pg/text@1\",\"default\":{\"kind\":\"literal\",\"value\":\"active\"},\"nativeType\":\"text\",\"nullable\":false,\"valueSet\":{\"entityKind\":\"valueSet\",\"entityName\":\"ContractStatus\",\"namespaceId\":\"public\",\"plane\":\"storage\"}}},\"foreignKeys\":[{\"source\":{\"columns\":[\"projectId\"],\"namespaceId\":\"public\",\"tableName\":\"contract\"},\"target\":{\"columns\":[\"id\"],\"namespaceId\":\"public\",\"tableName\":\"project\"}},{\"source\":{\"columns\":[\"clientId\"],\"namespaceId\":\"public\",\"tableName\":\"contract\"},\"target\":{\"columns\":[\"id\"],\"namespaceId\":\"public\",\"tableName\":\"user\"}},{\"source\":{\"columns\":[\"freelancerId\"],\"namespaceId\":\"public\",\"tableName\":\"contract\"},\"target\":{\"columns\":[\"id\"],\"namespaceId\":\"public\",\"tableName\":\"user\"}}],\"indexes\":[{\"columns\":[\"clientId\"],\"name\":\"contract_clientId_idx_153a9a49\",\"prefix\":\"contract_clientId_idx\",\"unique\":false},{\"columns\":[\"freelancerId\"],\"name\":\"contract_freelancerId_idx_c8137280\",\"prefix\":\"contract_freelancerId_idx\",\"unique\":false}],\"primaryKey\":{\"columns\":[\"id\"]},\"uniques\":[{\"columns\":[\"projectId\"]}]},\"project\":{\"checks\":[{\"expression\":\"\\\"status\\\" IN ('open', 'in_progress')\",\"name\":\"project_status_check_d373f548\",\"prefix\":\"project_status_check\"}],\"columns\":{\"budgetMax\":{\"codecId\":\"pg/int4@1\",\"nativeType\":\"int4\",\"nullable\":false},\"budgetMin\":{\"codecId\":\"pg/int4@1\",\"nativeType\":\"int4\",\"nullable\":false},\"category\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"clientId\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"createdAt\":{\"codecId\":\"pg/timestamptz-temporal@1\",\"default\":{\"expression\":\"now()\",\"kind\":\"function\"},\"nativeType\":\"timestamptz\",\"nullable\":false},\"deadline\":{\"codecId\":\"pg/timestamptz-temporal@1\",\"nativeType\":\"timestamptz\",\"nullable\":false},\"description\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"id\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"status\":{\"codecId\":\"pg/text@1\",\"default\":{\"kind\":\"literal\",\"value\":\"open\"},\"nativeType\":\"text\",\"nullable\":false,\"valueSet\":{\"entityKind\":\"valueSet\",\"entityName\":\"ProjectStatus\",\"namespaceId\":\"public\",\"plane\":\"storage\"}},\"title\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false}},\"foreignKeys\":[{\"source\":{\"columns\":[\"clientId\"],\"namespaceId\":\"public\",\"tableName\":\"project\"},\"target\":{\"columns\":[\"id\"],\"namespaceId\":\"public\",\"tableName\":\"user\"}}],\"indexes\":[{\"columns\":[\"clientId\"],\"name\":\"project_clientId_idx_153a9a49\",\"prefix\":\"project_clientId_idx\",\"unique\":false}],\"primaryKey\":{\"columns\":[\"id\"]},\"uniques\":[]},\"proposal\":{\"checks\":[{\"expression\":\"\\\"status\\\" IN ('pending', 'accepted', 'rejected')\",\"name\":\"proposal_status_check_4ecfb8f7\",\"prefix\":\"proposal_status_check\"}],\"columns\":{\"coverLetter\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"createdAt\":{\"codecId\":\"pg/timestamptz-temporal@1\",\"default\":{\"expression\":\"now()\",\"kind\":\"function\"},\"nativeType\":\"timestamptz\",\"nullable\":false},\"estimatedDuration\":{\"codecId\":\"pg/int4@1\",\"nativeType\":\"int4\",\"nullable\":false},\"freelancerId\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"id\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"projectId\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"proposedPrice\":{\"codecId\":\"pg/int4@1\",\"nativeType\":\"int4\",\"nullable\":false},\"status\":{\"codecId\":\"pg/text@1\",\"default\":{\"kind\":\"literal\",\"value\":\"pending\"},\"nativeType\":\"text\",\"nullable\":false,\"valueSet\":{\"entityKind\":\"valueSet\",\"entityName\":\"ProposalStatus\",\"namespaceId\":\"public\",\"plane\":\"storage\"}}},\"foreignKeys\":[{\"source\":{\"columns\":[\"projectId\"],\"namespaceId\":\"public\",\"tableName\":\"proposal\"},\"target\":{\"columns\":[\"id\"],\"namespaceId\":\"public\",\"tableName\":\"project\"}},{\"source\":{\"columns\":[\"freelancerId\"],\"namespaceId\":\"public\",\"tableName\":\"proposal\"},\"target\":{\"columns\":[\"id\"],\"namespaceId\":\"public\",\"tableName\":\"user\"}}],\"indexes\":[{\"columns\":[\"freelancerId\"],\"name\":\"proposal_freelancerId_idx_c8137280\",\"prefix\":\"proposal_freelancerId_idx\",\"unique\":false},{\"columns\":[\"projectId\"],\"name\":\"proposal_projectId_idx_a96e4d92\",\"prefix\":\"proposal_projectId_idx\",\"unique\":false}],\"primaryKey\":{\"columns\":[\"id\"]},\"uniques\":[{\"columns\":[\"projectId\",\"freelancerId\"]}]},\"user\":{\"checks\":[{\"expression\":\"\\\"role\\\" IN ('client', 'freelancer')\",\"name\":\"user_role_check_ae5d976e\",\"prefix\":\"user_role_check\"}],\"columns\":{\"createdAt\":{\"codecId\":\"pg/timestamptz-temporal@1\",\"default\":{\"expression\":\"now()\",\"kind\":\"function\"},\"nativeType\":\"timestamptz\",\"nullable\":false},\"email\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"id\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"name\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"password\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false},\"role\":{\"codecId\":\"pg/text@1\",\"nativeType\":\"text\",\"nullable\":false,\"valueSet\":{\"entityKind\":\"valueSet\",\"entityName\":\"Role\",\"namespaceId\":\"public\",\"plane\":\"storage\"}}},\"foreignKeys\":[],\"indexes\":[],\"primaryKey\":{\"columns\":[\"id\"]},\"uniques\":[{\"columns\":[\"email\"]}]}},\"valueSet\":{\"ContractStatus\":{\"kind\":\"valueSet\",\"values\":[\"active\"]},\"ProjectStatus\":{\"kind\":\"valueSet\",\"values\":[\"open\",\"in_progress\"]},\"ProposalStatus\":{\"kind\":\"valueSet\",\"values\":[\"pending\",\"accepted\",\"rejected\"]},\"Role\":{\"kind\":\"valueSet\",\"values\":[\"client\",\"freelancer\"]}}},\"id\":\"public\",\"kind\":\"postgres-schema\"}},\"storageHash\":\"cb70c58dcad64b437fd36db59115c7dac4f5edf8f5b1773937eb87d43e996588\"},\"execution\":{\"executionHash\":\"3aefe6e0f7523dda7a75dc6afa1f52b2e3e38b381ea5cb14e0c0820a71b2c484\",\"mutations\":{\"defaults\":[{\"onCreate\":{\"id\":\"uuidv4\",\"kind\":\"generator\"},\"ref\":{\"column\":\"id\",\"namespace\":\"public\",\"table\":\"contract\"}},{\"onCreate\":{\"id\":\"uuidv4\",\"kind\":\"generator\"},\"ref\":{\"column\":\"id\",\"namespace\":\"public\",\"table\":\"project\"}},{\"onCreate\":{\"id\":\"uuidv4\",\"kind\":\"generator\"},\"ref\":{\"column\":\"id\",\"namespace\":\"public\",\"table\":\"proposal\"}},{\"onCreate\":{\"id\":\"uuidv4\",\"kind\":\"generator\"},\"ref\":{\"column\":\"id\",\"namespace\":\"public\",\"table\":\"user\"}}]}},\"capabilities\":{\"postgres\":{\"distinctOn\":true,\"jsonAgg\":true,\"lateral\":true,\"limit\":true,\"orderBy\":true,\"returning\":true},\"sql\":{\"checkConstraint\":true,\"defaultInInsert\":true,\"enums\":true,\"lateral\":true,\"returning\":true,\"scalarList\":true}},\"extensions\":{},\"meta\":{},\"_generated\":{\"warning\":\"⚠️  GENERATED FILE - DO NOT EDIT\",\"message\":\"This file is automatically generated by \\\"prisma contract emit\\\".\",\"regenerate\":\"To regenerate, run: prisma contract emit\"}}"));}),
"[project]/src/prisma/composer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "appContract",
    ()=>appContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/prisma-next.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$WqxiKmM7$2d$B5spAytU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__pnContract$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/prisma-next-WqxiKmM7-B5spAytU.mjs [app-route] (ecmascript) <export r as pnContract>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/prisma/contract.json (json)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$WqxiKmM7$2d$B5spAytU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__pnContract$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$WqxiKmM7$2d$B5spAytU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__pnContract$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const appContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$WqxiKmM7$2d$B5spAytU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__pnContract$3e$__["pnContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json__$28$json$29$__["default"]);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$nextjs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/nextjs.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/prisma-next.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$WqxiKmM7$2d$B5spAytU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__pnPostgres$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/prisma-next-WqxiKmM7-B5spAytU.mjs [app-route] (ecmascript) <export i as pnPostgres>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$composer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/prisma/composer.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$WqxiKmM7$2d$B5spAytU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__pnPostgres$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$composer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$WqxiKmM7$2d$B5spAytU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__pnPostgres$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$composer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("service.ts")}`;
    }
};
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["compute"])({
    name: "app",
    deps: {
        database: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$WqxiKmM7$2d$B5spAytU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__pnPostgres$3e$__["pnPostgres"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$composer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appContract"])
    },
    build: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$nextjs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
        module: __TURBOPACK__import$2e$meta__.url,
        appDir: "."
    })
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/prisma/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "connectDatabase",
    ()=>connectDatabase,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$temporal$2d$polyfill$2f$full$2f$global$2e$esm$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/temporal-polyfill/full/global.esm.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-postgres/dist/runtime.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/prisma/contract.json (json)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function loadComposerDatabase() {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].load().database.client;
    } catch  {
        return undefined;
    }
}
const db = loadComposerDatabase() ?? (process.env.DATABASE_URL ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    contractJson: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json__$28$json$29$__["default"],
    url: process.env.DATABASE_URL
}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    contractJson: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json__$28$json$29$__["default"]
}));
let connection;
function connectDatabase() {
    connection ??= db.connect().then(()=>undefined).catch((error)=>{
        connection = undefined;
        throw error;
    });
    return connection;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuthCookie",
    ()=>clearAuthCookie,
    "hashPassword",
    ()=>hashPassword,
    "signToken",
    ()=>signToken,
    "verifyPassword",
    ()=>verifyPassword,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
;
;
const AUTH_COOKIE = "auth_token";
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
}
const secret = new TextEncoder().encode(JWT_SECRET);
async function hashPassword(password) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 12);
}
async function verifyPassword(password, hashedPassword) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hashedPassword);
}
async function signToken(payload) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime("7d").sign(secret);
}
async function verifyToken(token) {
    const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
    return {
        userId: payload.userId,
        role: payload.role,
        email: payload.email
    };
}
function clearAuthCookie(response) {
    response.cookies.set({
        name: AUTH_COOKIE,
        value: "",
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 0
    });
}
}),
"[project]/src/lib/errors.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError
]);
class ApiError extends Error {
    code;
    status;
    constructor(code, message, status){
        super(message), this.code = code, this.status = status;
        this.name = "ApiError";
    }
}
}),
"[project]/src/lib/getCurrentUser.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errors.ts [app-route] (ecmascript)");
;
;
;
const AUTH_COOKIE = "auth_token";
async function getCurrentUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get(AUTH_COOKIE)?.value;
    if (!token) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"]("UNAUTHORIZED", "Authentication required", 401);
    }
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyToken"])(token);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"]("UNAUTHORIZED", "Invalid or expired authentication token", 401);
    }
}
}),
"[project]/src/app/api/projects/[projectId]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/prisma/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$getCurrentUser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/getCurrentUser.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errors.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function GET(request, { params }) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDatabase"])();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$getCurrentUser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        const { projectId } = await params;
        const project = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].orm.public.Project.where({
            id: projectId
        }).include("client").include("proposals").first();
        if (!project) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"]("PROJECT_NOT_FOUND", "Project not found", 404);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            project: {
                id: project.id,
                title: project.title,
                description: project.description,
                category: project.category,
                budgetMin: project.budgetMin,
                budgetMax: project.budgetMax,
                deadline: project.deadline,
                status: project.status,
                clientName: project.client.name,
                proposalCount: project.proposals.length,
                createdAt: project.createdAt
            }
        });
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"]) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: error.code,
                message: error.message
            }, {
                status: error.status
            });
        }
        console.error(error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__233d09ea._.js.map