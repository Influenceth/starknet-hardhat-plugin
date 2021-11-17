#!/bin/bash
set -e

echo "DEBUG: delete this line; it's here just have some change for a new commit"
npx hardhat starknet-compile
npx hardhat starknet-deploy --starknet-network alpha
npx hardhat test
