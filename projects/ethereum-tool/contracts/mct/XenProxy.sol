// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "./TransparentUpgradeableProxy.sol";

/**
 * @dev TransparentUpgradeableProxy where admin is allowed to call implementation methods.
 */
contract XenProxy is TransparentUpgradeableProxy {
    /**
     * @dev Initializes an upgradeable proxy backed by the implementation at `_logic`.
     */
    constructor(address _logic, bytes memory _x) TransparentUpgradeableProxy(_logic, tx.origin, _x) {}

    /**
     * @dev Override to allow admin access the fallback function.
     */
    function _beforeFallback() internal override {}
}