#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ "$(uname)" != "Darwin" ]]; then
  echo "iOS builds require macOS + Xcode."
  exit 1
fi

if [[ ! -d "public/audio/en" || ! -d "public/audio/ja" ]]; then
  echo "Missing public/audio/. Generate audio on a dev machine first:"
  echo "  npm run generate:audio"
  exit 1
fi

echo ">> Sync web assets to iOS (offline build with pre-generated Opus audio)..."
npm run cap:sync:ios

echo ""
echo ">> Next: open Xcode and run on device or simulator"
echo "   npm run cap:ios"
echo ""
echo "In Xcode:"
echo "  1. Select App + iPhone target"
echo "  2. Signing & Capabilities → Team → your Apple ID"
echo "  3. Product → Run (⌘R)"
