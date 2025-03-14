module.exports = {
	addCompatFlag: (...args) => require("./addCompatFlag")(...args),
	addCompatFlagCreatePR: (...args) =>
		require("./addCompatFlagCreatePR")(...args),
	addFingerprint: (...args) => require("./addFingerprint")(...args),
	addFingerprintCreatePR: (...args) =>
		require("./addFingerprintCreatePR")(...args),
	approveWorkflows: (...args) => require("./approveWorkflows")(...args),
	checkAuthorized: (...args) => require("./checkAuthorized")(...args),
	ensureLogfile: (...args) => require("./ensureLogfile")(...args),
	fixLintFeedback: (...args) => require("./fixLintFeedback")(...args),
	getFixLintInfo: (...args) => require("./getFixLintInfo")(...args),
	rebaseFeedback: (...args) => require("./rebaseFeedback")(...args),
	renameCommitGetPRInfo: (...args) =>
		require("./renameCommitGetPRInfo")(...args),
	renameCommitCheck: (...args) => require("./renameCommitCheck")(...args),
	renameCommitFeedback: (...args) =>
		require("./renameCommitFeedback")(...args),
	importConfigCreatePR: (...args) =>
		require("./importConfigCreatePR")(...args),
};
