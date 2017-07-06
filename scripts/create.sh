#!/usr/bin/env bash

find . -name '*.txt' -print0 | xargs -0 sed -i "" "s/that/this/g"