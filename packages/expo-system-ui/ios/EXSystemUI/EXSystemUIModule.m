// Copyright 2018-present 650 Industries. All rights reserved.

#import <EXSystemUI/EXSystemUIModule.h>

@interface EXSystemUIModule ()

@property (nonatomic, weak) EXModuleRegistry *moduleRegistry;

@end

@implementation EXSystemUIModule

EX_EXPORT_MODULE(ExpoSystemUI);

- (void)setModuleRegistry:(EXModuleRegistry *)moduleRegistry
{
  _moduleRegistry = moduleRegistry;
}

@end
